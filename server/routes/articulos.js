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

// POST - Nuevo artículo:
router.post("/", async (req, res) => {
  let { title, subtitle, text, image, titleId } = req.body;

  if (!title || !subtitle || !text || !image || !titleId)
    return res.status(400).json({ msg: "Todos los campos son necesarios" });

  let existingArticle = await Articulo.findOne({ titleId: titleId });

  if (existingArticle)
    return res.status(400).json({ msg: "Ya hay un artículo con este título" });

  await Articulo.create(req.body, (err, newArticulo) => {
    if (err) {
      console.log(err);
      res.status(400).json({ msg: "Error" });
    } else {
      res.status(200).json({ msg: "Persona creada exitosamente" });
    }
  });
});

// SHOW - Muestra información detallada del persona con el ID indicado.
router.get("/:id", (req, res) => {
  // console.log(req.params.id);
  let titleId = req.params.id;
  Articulo.findOne({ titleId: titleId }, (err, articulo) => {
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
router.put("/:id", async (req, res) => {
  let { title, subtitle, text, image, titleId } = req.body;

  if (!title || !subtitle || !text || !image || !titleId)
    return res.status(400).json({ msg: "Todos los campos son necesarios" });

  let existingArticle = await Articulo.findOne({ titleId: titleId });

  if (existingArticle)
    return res.status(400).json({ msg: "Ya hay un artículo con este título" });

  // res.send(
  //   "Update action: Actualizar la información del persona con el ID indicado."
  // );
  titleId = req.params.id;
  Articulo.findOneAndUpdate(
    { titleId: titleId },
    { $set: req.body },
    (err, articulo) => {
      if (err) {
        console.log(err);
        res.status(400).send("Error");
      } else {
        res.status(200).send("Articulo actualizado exitosamente");
      }
    }
  );
});

// DELETE - Borra el persona con el ID indicado.
router.delete("/:id/", (req, res) => {
  // res.send("Delete action: Borra el persona con el ID indicado.");
  let id = req.params.id;
  Articulo.findOneAndDelete(
    { titleId: id },
    { $set: req.body },
    (err, articulo) => {
      if (err) {
        console.log(err);
        res.status(400).send("Error");
      } else {
        res.status(200).send("Articulo borrado exitosamente");
      }
    }
  );
});

module.exports = router;
