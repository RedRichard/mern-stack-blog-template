const express = require("express"),
  router = express.Router();

// Article MODEL
const Articulo = require("../models/articulo");

// INDEX - Página con todos los artículos:
router.get("/", (req, res) => {
  //res.send("Index de artículos");
  Articulo.find()
    .sort({ created: -1 })
    .exec({}, (err, articulos) => {
      if (err) {
        console.log(err);
      } else {
        res.json(articulos);
      }
    });
});

// NEW - Forma para crear nuevo artículo:
router.get("/new", (req, res) => {
  res.send("Forma de nuevos artículos");
});

// POST - Nuevo artículo:
router.post("/", (req, res) => {
  let articulo = new Articulo(req.body);
  articulo
    .save()
    .then((articulo) => {
      res.status(200).json({ articulo: "articulo guardado exitosamente" });
    })
    .catch((err) => {
      res.status(400).send("Article save failed.");
    });
});

module.exports = router;
