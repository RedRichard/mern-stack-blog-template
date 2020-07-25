const express = require("express"),
  router = express.Router(),
  passport = require("passport");

// Article MODEL
const Usuario = require("../models/usuario");

// INDEX - Home page
router.get("/", (req, res) => {});

// POST - Nuevo usuario:
router.post("/", (req, res) => {
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

// SHOW - Muestra información detallada del usuario con el ID indicado.
router.get("/:id", (req, res) => {});

// NEW - Forma para crear nuevo usuario:
router.get("/new", (req, res) => {});

// UPDATE - Actualiza la información del usuario con el ID indicado.
router.put("/:id", (req, res) => {});

// DELETE - Borra el usuario con el ID indicado.
router.delete("/:id/", (req, res) => {});

module.exports = router;
