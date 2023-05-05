const Cinema = require("../models/cinema.models");

const allCinemas = async (req, res) => {
  try {
    const allCinemas = await Cinema.find();
    return res.status(201).json(allCinemas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCinemaById = async (req, res) => {
  try {
    const {id} = req.params;
    const cinema = await Cinema.findById(id).populate({
      path: "movies",
      select: "_id title genre",
    });
    return res.status(201).json(cinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const setNewCinema = async (req, res)=> {
  try {
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(200).json(createdCinema)
  } catch (error) {
    return res.status(500).json(error);
  }
}


const updateCinema = async (req,res)=> {
  try {
    const {id} = req.params
    const putCinema = new Cinema(req.body);
    putCinema._id = id;

    const updateCine = await Cinema.findByIdAndUpdate(id, putCinema, {new: true,}).populate({
      path: "movies",
      select: "_id title genre",
    });;
    return res.status(200).json(updateCine)
  } catch (error) {
    return res.status(500).json(error);  
  }
}


const deleteCinema = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCinema = await Cinema.findByIdAndDelete(id);
    if (!deleteCinema) {
      return res.status(404).json({ message: "cinema not found" });
    }
    return res.status(200).json(deleteCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { allCinemas, getCinemaById, setNewCinema, updateCinema, deleteCinema};
