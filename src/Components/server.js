const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "stylomart",
});

// Endpoint for login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  connection.query(
    "SELECT * FROM customer WHERE username = ? AND password = ?",
    [username, password],
    (error, results) => {
      if (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false });
      } else if (results.length > 0) {
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ success: false });
      }
    }
  );
});

// Endpoint for signup
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  connection.query(
    "INSERT INTO customer (username, password) VALUES (?, ?)",
    [username, password],
    (error) => {
      if (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false });
      } else {
        res.status(200).json({ success: true });
      }
    }
  );
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3306");
});
