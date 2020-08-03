const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  auth = require("../middleware/auth");

// Article MODEL
const Usuario = require("../models/usuario");

router.post("/tokenIsValid", async (req, res) => {
  // console.log(req.user);
  try {
    let token = req.header("x-auth-token");
    if (!token) return res.json(false);

    let verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) if (!token) return res.json(false);

    // console.log(verified);
    let user = await Usuario.findById(verified.id);
    if (!user) return res.json(false);

    res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/isTokenValid", async (req, res) => {
  // console.log(req.user);
  try {
    let token = req.header("x-auth-token");
    if (!token) return res.json(false);

    let verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) if (!token) return res.json(false);

    // console.log(verified);
    let user = await Usuario.findById(verified.id);
    if (!user) return res.json(false);

    res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  let user = await Usuario.findById(req.user);
  res.json({
    username: user.username,
    email: user.email,
    name: user.name,
    id: user._id,
  });
});

module.exports = router;
