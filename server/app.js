// Import libraries:
const express = require("express"),
  expressSanitizer = require("express-sanitizer"),
  mongoose = require("mongoose"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  seedDB = require("./seeds");

// Import models:
const Articulo = require("./models/articulo"),
  Autor = require("./models/usuario");

// Important variables:
const app = express();

//Mongoose config:
mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);

// Connection to database:
mongoose.connect("mongodb://localhost/letras_transformadoras", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed database:
seedDB();

// Route variables:
const indexRoutes = require("./routes/index"),
  articuloRoutes = require("./routes/articulos");

// Express config:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use("/", indexRoutes);
app.use("/articulos", articuloRoutes);

app.listen(9000, () => {
  console.log("El servidor está funcionando.");
});

module.exports = app;
