const express = require("express");
const {
  getAllMedicines,
  getInfo,
  getAll,
} = require("../controllers/medicines");
const router = express.Router();

router.get("/", getAllMedicines);
router.post("/", getInfo);
router.post("/result", getAll);

module.exports = router;
