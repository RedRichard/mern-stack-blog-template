const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// Databse schema setup:
const usuarioSchema = new mongoose.Schema({
  username: String,
  passport: String,
  name: String,
  email: String,
  about: String,
});

usuarioSchema.plugin(passportLocalMongoose);

// This creates a new collection: Autor
module.exports = mongoose.model("Usuario", usuarioSchema);
