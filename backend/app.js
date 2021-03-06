// Importation des modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// Importation des routeurs
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

// Application Express
const app = express();

// Connexion base de données
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_Pass}@cluster0.bceat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;