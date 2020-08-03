const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

// Article MODEL
const Usuario = require("../models/usuario");

// INDEX - Home page
router.get("/", (req, res) => {});

// POST - REGISTRO Nuevo usuario:
router.post("/signup", async (req, res) => {
  try {
    let { username, password, passwordCheck, email } = req.body;

    if (!username || !password || !passwordCheck || !email) {
      return res.status(400).json({ msg: "Todos los campos son requeridos" });
    }
    if (password.length < 5) {
      return res
        .status(400)
        .json({ msg: "La contraseña necesita al menos 5 caracteres" });
    }
    if (password != passwordCheck) {
      return res.status(400).json({ msg: "Las contraseñas no coinciden" });
    }

    let existingUser = await Usuario.findOne({ username: username });
    if (existingUser) {
      return res.status(400).json({ msg: "Este usuario ya existe" });
    }

    let existingEmail = await Usuario.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({ msg: "Este correo ya esta registrado" });
    }

    let salt = await bcrypt.genSalt();

    let passwordHash = await bcrypt.hash(password, salt);

    let newUser = new Usuario({
      username,
      password: passwordHash,
      email,
    });

    let savedUser = await newUser.save();
    res.json(savedUser);
  } catch {
    res.status(500).json({ error: err.message });
  }
});

// POST - LOGIN Usuario:
router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ msg: "Todos los campos son requeridos" });
    }

    let user = await Usuario.findOne({ username: username });
    if (!user) {
      return res.status(400).json({ msg: "Usuario no registrado" });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Contraseña incorrecta" });

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch {
    res.status(500).json({ error: err.message });
  }
});

// GET - LOGOUT Usuario:
router.get("/logout", (req, res) => {
  res.status(200).send("Logout exitoso");
});

module.exports = router;
