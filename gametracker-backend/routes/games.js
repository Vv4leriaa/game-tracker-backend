const express = require("express");
const router = express.Router();
const Game = require("../models/Game");
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;

    let query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" }; 
    }

    const games = await Game.find(query).sort({ createdAt: -1 });
    res.json(games);

  } catch (error) {
    res.status(500).json({ error: "Error al obtener juegos" });
  }
});
router.post("/", async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ error: "Error al crear juego" });
  }
});
router.post("/bulk", async (req, res) => {
  try {
    const games = await Game.insertMany(req.body);
    res.status(201).json(games);
  } catch (error) {
    res.status(400).json({ error: "Error al crear juegos en lote" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!game) {
      return res.status(404).json({ error: "Juego no encontrado" });
    }

    res.json(game);

  } catch (error) {
    res.status(400).json({ error: "Error al actualizar juego" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Game.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Juego no encontrado" });
    }

    res.json({ message: "Juego eliminado correctamente" });

  } catch (error) {
    res.status(400).json({ error: "Error al eliminar juego" });
  }
});
router.post("/:id/reviews", async (req, res) => {
  try {
    const { review } = req.body;

    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ error: "Juego no encontrado" });

    game.review = review;
    await game.save();

    res.json(game);

  } catch (error) {
    res.status(400).json({ error: "Error al agregar reseña" });
  }
});
router.put("/:id/reviews", async (req, res) => {
  try {
    const { review } = req.body;

    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ error: "Juego no encontrado" });

    game.review = review;
    await game.save();

    res.json(game);

  } catch (error) {
    res.status(400).json({ error: "Error al actualizar reseña" });
  }
});
router.delete("/:id/reviews", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ error: "Juego no encontrado" });

    game.review = "";
    await game.save();

    res.json(game);

  } catch (error) {
    res.status(400).json({ error: "Error al eliminar reseña" });
  }
});

module.exports = router;
