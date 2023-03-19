const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");

dotenv.config();
connectDB();
app.use(express.json());
app.use("*", cors());

app.get("/product", (req, res) => {
	res.send("API is Running");
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, console.log(`Product Server Started on port ${PORT}..`));
