const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const connectDB = require("./db");

const app = express();

app.use(logger("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send(`<h1>APIs Up && running 🚀</h1>`);
});

app.use('/api/product',require('./Routes/Product.route'))



const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
