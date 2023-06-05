const pool = require("../config/connect");
const path = require("path");

exports.getAllMedicines = (req, res) => {
  //   const { search } = req.body;
  pool.query("select * from medicines where id=1", (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json({
        message: "ERRor",
      });
    } else {
      res.render("homepage", { result });
      //   res.json(JSON.stringify(result));
    }
  });
};
exports.getInfo = (req, res) => {
  const { search } = req.body;
  console.log(search);
  pool.query("select * from medicines", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.render("result", { search });
      res.end("Error mas");
    }
  });
};
exports.getAll = (req, res) => {
  const { search } = req.body;
  if (search.length == 0) {
    res.render("homepage");
  } else {
    console.log("search...", search);
    pool.query(
      `select m.name, m.price, p.phone, p.pharmname, s.quantity,p.address,m.manufacturer from medicines as m
        inner join stock as s on m.id = s.medicine_id
        inner join pharmacies as p on s.pharmacy_id = p.id
        inner join region as reg on reg.id=p.region_id
        where m.name like ?  and s.quantity > 0;`,
      [`%${search}%`],
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          // console.log(result);
          res.render("result", { result });
        }
      }
    );
  }
};
