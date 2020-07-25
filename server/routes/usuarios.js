const express = require("express"),
  router = express.Router();

// Article MODEL
const Usuario = require("../models/usuario");

// INDEX - Página con todos los usuarios:
router.get("/", (req, res) => {});

// POST - Nuevo usuario:
router.post("/", (req, res) => {});

// SHOW - Muestra información detallada del usuario con el ID indicado.
router.get("/:id", (req, res) => {});

// NEW - Forma para crear nuevo usuario:
router.get("/new", (req, res) => {});

// UPDATE - Actualiza la información del usuario con el ID indicado.
router.put("/:id", (req, res) => {});

// DELETE - Borra el usuario con el ID indicado.
router.delete("/:id/", (req, res) => {});

module.exports = router;
