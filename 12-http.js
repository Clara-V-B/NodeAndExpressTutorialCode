const http = require('http');
// http built-in module is going to allow us to set up a web server
//creo un servidor
//req incomming
//res what sending back
const server = http.createServer((req, res) => {
  // ambos parámetros son objetos
  //console.log(req) //obj gigante, buscamos url prop
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }
  //default response...
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `); //termino mi respuesta
});

//que puerto vamos a escuchar
server.listen(5000);

//Si voy a http://localhost:5000/ me aparece el mensaje
