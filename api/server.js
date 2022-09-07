const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/", (req, res) => {
  res.send("APIs Up && running");
});


const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
