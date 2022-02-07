// TODO update this and define a Mongoose schema and model!

const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
  url: { type: String, required: true },
  short: { type: String, required: true, unique: true },
});

const URL = mongoose.model("URL", URLSchema);

module.exports = URL;