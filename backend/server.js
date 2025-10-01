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

app.use(cors(corsOptions));

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

// Création de l'endPoint(de la route)
app.get("/", (req, res) => {
    // res.json("Salut à toi depuis le backend"); 
    const sql = "SELECT * FROM student";
    database.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Serveur backend sur le port 8081 pak pak");
})

