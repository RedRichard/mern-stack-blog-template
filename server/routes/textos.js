const express = require("express"),
  router = express.Router();

// Article MODEL
const Texto = require("../models/texto");

// INDEX - Página con todos los artículos:
router.get("/", (req, res) => {
  //res.send("Index de artículos");
  Texto.find()
    .sort({ created: -1 })
    .exec({}, (err, Textos) => {
      if (err) {
        console.log(err);
      } else {
        res.json(Textos);
      }
    });
});

// POST - Nuevo artículo:
router.post("/", (req, res) => {
  // Preparar tipo: minusculas sin signos
  req.body.type = req.body.type
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  Texto.create(req.body, (err, newTexto) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error: " + body);
    } else {
      console.log(req.body);
      res.status(200).send("Texto creado exitosamente");
    }
  });
});

// SHOW - Obten todos los textos de cierto tipo
router.get("/:type/", (req, res) => {
  // console.log(req.params.id);
  Texto.find({ type: { $eq: req.params.type } }, (err, texto) => {
    if (err) {
      console.log(err);
    } else {
      res.json(texto);
    }
  });
});

// SHOW - Muestra información detallada del texto con el ID indicado.
router.get("/:type/:id", (req, res) => {
  // console.log(req.params.id);
  Texto.findById(req.params.id, (err, articulo) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(persona);
      res.json(articulo);
    }
  });
});

// NEW - Forma para crear nuevo artículo:
router.get("/new", (req, res) => {
  res.send("Forma de nuevos artículos");
});

// UPDATE - Actualiza la información del persona con el ID indicado.
router.put("/:type/:id", (req, res) => {
  // res.send(
  //   "Update action: Actualizar la información del persona con el ID indicado."
  // );
  // Preparar tipo: minusculas sin signos
  req.body.type = req.body.type
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  let id = req.params.id;
  Texto.findOneAndUpdate({ _id: id }, { $set: req.body }, (err, Texto) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error");
    } else {
      res.status(200).send("Texto actualizado exitosamente");
    }
  });
});

// DELETE - Borra el persona con el ID indicado.
router.delete("/:type/:id/", (req, res) => {
  // res.send("Delete action: Borra el persona con el ID indicado.");
  let id = req.params.id;
  Texto.findOneAndDelete({ _id: id }, { $set: req.body }, (err, Texto) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error");
    } else {
      res.status(200).send("Texto borrado exitosamente");
    }
  });
});

module.exports = router;
