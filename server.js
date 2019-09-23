const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000; // Accedo a las variables de entorno globales que nos da Heroku para saber el puerto
// Este puerto en local no existe, por eso le ponemos que, si no existe coja el puerto 3000

// __dirname representa la ruta completa, en el servidor, de una web
app.use(express.static(__dirname + '/public')); // Midleware que permite que cualquier usuario pueda acceder a la carpeta public 

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); // Registramos la carpeta en la que tengo los templates parciales
app.set('view engine', 'hbs'); // Con esto conseguimos utilizar hbs




app.get('/', (req, res) => {

    res.render('home', { // Al utilizar un template engine hbs, podemos renderizar el archivo home.hbs
        nombre: 'José Manuel' // Variable que podremos usar desde home.hbs
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});