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
router.post("/", (req, res) => {
  Articulo.create(req.body, (err, newArticulo) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error");
    } else {
      res.status(200).send("Persona creada exitosamente");
    }
  });
});

// SHOW - Muestra información detallada del persona con el ID indicado.
router.get("/:id", (req, res) => {
  // console.log(req.params.id);
  Articulo.findById(req.params.id, (err, articulo) => {
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
router.put("/:id", (req, res) => {
  // res.send(
  //   "Update action: Actualizar la información del persona con el ID indicado."
  // );
  let id = req.params.id;
  Articulo.findOneAndUpdate(
    { _id: id },
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
    { _id: id },
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

// login middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("No has iniciado sesión");
}

module.exports = router;
