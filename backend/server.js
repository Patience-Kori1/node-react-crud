// Import d'express
const express = require("express"); 
const app = express();

// Route GET de base
app.get("/", (req, res) => {
  res.send("Coucou Pak");
});

// Lancer le serveur sur le port 8081
app.listen(8081, () => {
  console.log("Coucou Kori");
});