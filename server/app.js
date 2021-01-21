// Import libraries:
const express = require("express"),
  expressSanitizer = require("express-sanitizer"),
  mongoose = require("mongoose"),
  path = require("path"),
  cors = require("cors"),
  seedDB = require("./seeds");

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
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set("useFindAndModify", false);

// Seed database:
seedDB();

// Route variables:
const indexRoutes = require("./routes/index"),
  textoRoutes = require("./routes/textos");

// Express config:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoutes);
app.use("/textos", textoRoutes);

// app.listen(9000, () => {
//   console.log("El servidor está funcionando.");
// });

module.exports = app;
