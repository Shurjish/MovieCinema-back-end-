const express = require("express");
const { allCinemas, getCinemaById, setNewCinema, updateCinema, deleteCinema} = require("../controllers/cinema.controllers");

const router = express.Router();

router.get("/", allCinemas);
router.get("/:id", getCinemaById);
router.post("/", setNewCinema);
router.put("/:id", updateCinema);
router.delete("/:id", deleteCinema);

module.exports = router;