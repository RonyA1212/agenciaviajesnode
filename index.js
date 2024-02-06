// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada') )
    .catch( error => console.log(error) );

// Definir puerto en caso de que exista la variable PORT en el entorno
const port = process.env.PORT || 4000;

// Obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes"
    // console.log(res.locals)
    next();
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }))

// Definir la carpeta publica
app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static('public'));

// Habilitar PUg
app.set('view engine','pug');

// Agregar Router
app.use('/', router);


app.listen(port, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
