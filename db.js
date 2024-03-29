const mysql = require("mysql2");

const database = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "%admin-#!"
});

database.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    database.query("CREATE DATABASE node-api-db", (err, result) => {
        if (err) throw err;
        console.log("Database Created!");
    })
})