const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Rutas
app.use('/api/users', userRoutes);

//Endpoint de prueba
app.get('/api/test', (req, res) => {
    res.send('Ruta raíz del backend funcionando correctamente');
});

app.get('/', (req, res) => {
    res.send('Ruta Test del backend funcionando correctamente');
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.stack);
});

//Exportamos el app para usarlo en index.js
module.exports = app;