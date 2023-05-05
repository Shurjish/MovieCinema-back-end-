const express = require("express");
const { getMovies, getId, getTitle, getGenre, getYear, postMovies, putMovies, deleteMovies } = require("../controllers/movie.controllers");

const router = express.Router();

router.get("/", getMovies);
router.get("/id/:id", getId);
router.get("/title/:title", getTitle);
router.get("/genre/:genre", getGenre);
router.get("/year/:year", getYear);

router.post("/", postMovies);
router.put("/:id", putMovies);
router.delete("/:id", deleteMovies);

module.exports = router;
