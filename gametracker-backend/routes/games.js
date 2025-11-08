const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// GET todos
router.get("/", async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener juegos" });
  }
});

// POST crear juego
router.post("/", async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ error: "Error al crear juego" });
  }
});

/* ✅ NUEVA RUTA PARA GUARDAR VARIOS JUEGOS DE UNA SOLA VEZ */
router.post("/bulk", async (req, res) => {
  try {
    // req.body debe ser un ARRAY de juegos
    const games = await Game.insertMany(req.body);
    res.status(201).json(games);
  } catch (error) {
    res.status(400).json({ error: "Error al crear juegos en lote" });
  }
});

module.exports = router;
