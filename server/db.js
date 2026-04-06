const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // met ton mot de passe phpMyAdmin
  database: "cfqleader"
});

db.connect((err) => {
  if (err) {
    console.error("Erreur connexion MySQL ❌", err);
  } else {
    console.log("MySQL connecté ✅");
  }
});

module.exports = db;