const express = require("express"); 
const app = express();


const cors = require("cors");
const mysql = require("mysql");

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:8081",
    ],
    optionsSuccessStatus: 200,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    headers: "Content-Type,Authorization",
    credentials: true,
};

app.use(cors(corsOptions));//pour plus de précision mais app.use(cors());faisable
app.use(express.json()); // Middleware pour lire le JSON envoyé dans le body

// Création de la base de donnée
const database = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",    
    database: "crud_node_afpa"
})

// Connection à la base
database.connect(err => {
    if(err) {
        console.log("Erreur de connexion DB :", err);
    } else {
        console.log("Connecté à la base de données");
    }
});

// Route pour récupérer tous les étudiants
app.get("/", (req, res) => {
    // res.json("Salut à toi depuis le backend"); 
    const sql = "SELECT * FROM student";
    database.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

// Route POST pour créer un étudiant
app.post('/create', (req, res) => {
  // Requête SQL pour insérer un nouvel étudiant
  //
  const sql = "INSERT INTO student (`name`, `email`) VALUES (?, ?)";//certains ont une erreur avec les deux ? peu etre en mettre qu'un

  // Valeurs à insérer
  const values = [ 
    req.body.name, // Nom de l'étudiant
    req.body.email // Email de l'étudiant
  ];

  // Exécution de la requête SQL
  database.query(sql, values, (err, data) => {
    // Si une erreur se produit, renvoie un message d'erreur
    if (err) {
      console.log('SQL Error:', err);
      return res.status(500).json({ error: 'Error in inserting student' });
    }
    // if(err) return res.json("Error");
    // Sinon, renvoie les données insérées
    return res.json(data);
  })
})

app.listen(8081, () => {
    console.log("Serveur backend sur le port 8081 pak pak");
})

