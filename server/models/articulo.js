const mongoose = require("mongoose");

// Databse schema setup:
const articuloSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  text: String,
  image: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    username: String,
  },
  created: { type: Date, default: Date.now },
  titleId: { type: String, unique: true },
});

// This creates a new collection: Articulo
module.exports = mongoose.model("Articulo", articuloSchema);
