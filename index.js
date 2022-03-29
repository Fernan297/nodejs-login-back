const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();

// Forma de capturar el body en las peticiones
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// Conexion a la Base de datos

// import routes
const authRoutes = require('./routes/auth.js');

// route del middleware
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mesaje: 'WORS!'
    });
});

app.get('/api/user', authRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`);
});