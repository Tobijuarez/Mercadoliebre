const express = require('express');
const app = express();

const path = require('path');

app.use(express.static("public"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Servidor corriendo en puerto', port);
});

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/register', function (req, res){
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
