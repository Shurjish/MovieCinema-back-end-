const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const movieRouter = require("./src/api/routes/movie.routes");
const cinemaRouter = require("./src/api/routes/cinema.routes");

dotenv.config();
const { connect } = require("./src/utils/db");

const app = express();
const PORT = process.env.PORT || 8000;
connect();
app.use(cors());
app.use(express.json());

app.use("/movies", movieRouter);
app.use("/cinemas", cinemaRouter);

app.listen(PORT, () => console.log(`server listening on port ` + PORT));
