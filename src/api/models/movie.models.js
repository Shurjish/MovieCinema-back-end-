const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: false },
    year: { type: Number, required: false },
    genre: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "Movies",
  }
);

const Movie = mongoose.model("Movies", movieSchema);
module.exports = Movie;
