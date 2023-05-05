const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    movies: [{ type: Schema.Types.ObjectId, ref: "Movies" }]
  },
  {
    timestamps: true,
    collection: "Cinemas",
  }
);

const Cinema = mongoose.model("Cinemas", cinemaSchema);
module.exports = Cinema;