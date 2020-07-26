const mongoose = require("mongoose");

// Databse schema setup:
const usuarioSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  about: String,
});

// This creates a new collection: Autor
module.exports = mongoose.model("Usuario", usuarioSchema);
