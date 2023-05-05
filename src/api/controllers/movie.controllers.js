const Movie = require("../models/movie.models");

const getMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    return res.status(201).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getId = async (req, res) => {
    try {
        const id = await Movie.findById(id);
        if (!id) {
            return res.status(404).json({ message: "movie not found by this id" });
          };
        return res.status(200).json(id);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  const getTitle = async (req, res) => {
    try {
        const {title} = req.params;
        const movieTitle = await Movie.find({title});
        if (!movieTitle) {
            return res.status(404).json({ message: "movie not found by this title" });
          };
        return res.status(200).json(movieTitle);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const getGenre = async (req, res) => {
    try {
        const {genre} = req.params;
        const movieGenre = await Movie.find({genre});
        if (!movieGenre) {
            return res.status(404).json({ message: "movie not found by this genre" });
          };
        return res.status(200).json(movieGenre);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const getYear = async (req, res) => {
    try {
        const {year} = req.params;
        const movieYear = await Movie.find({year: {$gt:year}});
        if (!movieYear) {
            return res.status(404).json({ message: "movie not found by this year" });
          };
        return res.status(200).json(movieYear);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const postMovies = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const putMovie = new Movie(req.body);
    putMovie._id = id;

    const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {
      new: true,
    });
    if (!updateMovie) {
      return res.status(404).json({ message: "movie not found" });
    }
    return res.status(200).json(updateMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovie = await Movie.findByIdAndDelete(id);
    if (!deleteMovie) {
      return res.status(404).json({ message: "movie not found" });
    }
    return res.status(200).json(deleteMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getMovies, getId, getTitle, getGenre, getYear, postMovies, putMovies, deleteMovies };
