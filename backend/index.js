const express = require('express');
const mysql = require('mysql');
const app = express();

// Create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testsystemdb'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

app.get('/user', (req, res) => {
    connection.query('SELECT * FROM fdmee', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});
