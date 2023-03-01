const express = require('express');
const { dbConection } = require('./db/config');
const cors = require('cors');
require('dotenv').config();

//Crear el servidor de Express
const app = express();

//Base de datos
dbConection();

app.use(cors());

app.use( express.static('public') );
app.use( express.json() );

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html');
});

// Escuchar Peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});