const mongoose = require("mongoose");

// Databse schema setup:
const textoSchema = new mongoose.Schema({
  type: String,
  title: String,
  subtitle: String,
  text: String,
  image: String,
  created: { type: Date, default: Date.now },
});

// This creates a new collection: Texto
module.exports = mongoose.model("Texto", textoSchema);
