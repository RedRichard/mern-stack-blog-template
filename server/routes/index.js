const express = require("express"),
  router = express.Router(),
  passport = require("passport");

// Article MODEL
const Usuario = require("../models/usuario");

// INDEX - Home page
router.get("/", (req, res) => {});

// POST - REGISTRO Nuevo usuario:
router.post("/signup", (req, res) => {
  // data = req.body;
  // console.log("req: " + data.password);
  const newUser = new Usuario({ username: req.body.username });
  Usuario.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error");
    } else {
      passport.authenticate("local")(req, res, () => {
        res.status(200).send("Registro exitoso");
      });
    }
  });
});

// POST - LOGIN Usuario:
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send("Login exitoso");
});

// GET - LOGOUT Usuario:
router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("Logout exitoso");
});

// login middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("No has iniciado sesión");
}

module.exports = router;
