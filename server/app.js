// Import libraries:
const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  path = require("path"),
  cors = require("cors"),
  seedDB = require("./seeds");

// Important variables:
const app = express();

// Import models:
const Articulo = require("./models/articulo"),
  Usuario = require("./models/usuario");

// Route variables:
const indexRoutes = require("./routes/index"),
  articuloRoutes = require("./routes/articulos");

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
//seedDB();

app.use(bodyParser.urlencoded({ extended: true }));
// Express config:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());

// Authentication config: Express session:
// The secret is used to code and decode all session data
app.use(
  require("express-session")({
    secret: "Oyuki is the best doggo ever~",
    resave: false,
    saveUninitialized: false,
  })
);

// Authentication config: Passport config
app.use(passport.initialize());
app.use(passport.session());
// Enconde and decode config for Usuario:
passport.use(new LocalStrategy(Usuario.authenticate()));
passport.serializeUser(Usuario.serializeUser());
passport.deserializeUser(Usuario.deserializeUser());

app.use(express.json());
app.use("/", indexRoutes);
app.use("/articulos", articuloRoutes);

// app.listen(9000, () => {
//   console.log("El servidor está funcionando.");
// });

module.exports = app;
