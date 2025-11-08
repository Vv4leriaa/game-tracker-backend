const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: { type: String, default: "PC" },
  progress: { type: String, default: "0%" },
  cover: { type: String, default: "" },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  review: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Game", GameSchema);
