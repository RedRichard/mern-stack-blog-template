const express = require("express"),
  router = express.Router(),
  passport = require("passport");

// Article MODEL
const Usuario = require("../models/usuario");

// INDEX - Home page
router.get("/", (req, res) => {});

// POST - Nuevo usuario:
router.post("/", (req, res) => {
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

module.exports = router;
