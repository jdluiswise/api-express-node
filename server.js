//Imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// ENV
dotenv.config();
const { MONGO_URI, PORT, SERVER_URL } = process.env;

//------>>>>SERVER CONFIG<<<<--

//Express declaration and connection
const app = express();

//Allow CORS
app.use(
  cors({
    origin: SERVER_URL || `localhost:${PORT}`,
  })
);

//Middelware for POST and PUT Request
app.use(express.json());

//Use Route
app.get("/", (req, res) => {
  res.send(
    "Welcome to The Wise Dreams, Macronesia Proyect, select images route for access to the CRUD"
  );
});

const imagesRouter = require("./routes/images");
app.use("/images", imagesRouter); //thats created the path: ${SERVER_URL}/images

//------>>>>DATA BASE<<<<--
//Connection to  DATA BASE with AZURE COSMOS DB MongoDb

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.error("Somethinq was wrong: " + error);
});

db.once("open", function () {
  console.log("connected to database");
});

//------>>>>SERVER INIT<<<<--

app.listen(PORT, () => {
  console.log("server started at " + PORT);
});
