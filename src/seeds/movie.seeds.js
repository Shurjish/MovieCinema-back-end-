const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Movie = require("../api/models/movie.models");
dotenv.config();

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allMovies = await Movie.find();
    if (Movie.length > 0) {
      await Movie.collection.drop();
      console.log("deleted movies");
    }
  })
  .catch((error) => console.log(`error deleting movies: ${error}`))
  .then(async () => {
    const moviesMap = movies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log("movies have been inserted");
  })
  .catch((error) => console.log(`error inserting movies: ${error}`))
  .finally(() => mongoose.disconnect());
