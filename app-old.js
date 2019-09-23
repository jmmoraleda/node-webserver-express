const http = require('http'); // http ya viene en Node.


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'José Manuel',
            edad: 48,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');
        res.end(); // Con esto le decimos que ya terminamos de crear la respuesta. Si no, se cuelga el navegador

    })
    .listen(8080);


console.log('Escuchando el puerto 8080');