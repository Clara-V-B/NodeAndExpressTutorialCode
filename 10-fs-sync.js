// Dos maneras: Manera uno que es síncrona y bloqueante

// const fs = require('fs')
// fs.readFileSync

//Es lo mismo que...
const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

//Ahora voy a crear un nuevo archivo con writeFileSync
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`
);
//Si entro acá result-sync.txt y le cambio el texto pero no cambio la linea de arriba, va a ser sobreescrito por lo de arriba
// writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{ flag: 'a'})
// tercer parámetro de writeFileSync es un objeto, acá el nombre de la propiedad es flag
// si le digo que flag sea igual a 'a' entonces node va a agregar lo que yo puse en el segundo parámetro al archivo, cuando ponemos esta flag ponemos un nuevo valor, si quitamos este objeto se sobreescribe el archivo directamente.
// con la linea de arriba estoy escribiendo un nuevo resultado que se le pega al anterior
console.log('done with this task');
console.log('starting the next one');
