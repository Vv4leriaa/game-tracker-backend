require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const gamesRoute = require("./routes/games");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB(process.env.MONGO_URI);

// Rutas
app.use("/api/games", gamesRoute);

app.get("/", (req, res) => {
  res.send("✅ GameTracker API funcionando");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
