// Dos maneras: Manera dos que es asíncrona y no bloqueante

const { readFile, writeFile } = require('fs');

console.log('start');

//readFile() recibe como parámetros, the path, the encoding and a callback
//a la cual le pasamos dos argumentos, el primero es un error y el segundo es el resultado
readFile('./content/first.txt', 'utf8', (err, result) => {
  //dentro del cuerpo de la callback chequeo si hay un error
  if (err) {
    console.log(err);
    return;
  }
  //si no hay error vamos a poder acceder a los datos
  //console.log(result);
  // arriba obtengo un buffer si no le puse utf8 entre el path y el callback, sino si obtengo el texto
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting the next one');

//we don't get a text, we get a buffer if we omit the utf8 part above
