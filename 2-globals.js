// GLOBALS  - NO WINDOW !!!!

// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules (Common JS)
// module      - info about currently module (file)
// process     - info about env where the program is being executed

console.log(__dirname) //C:\Users\OS\Desktop\tutorial
console.log(__filename) //C:\Users\OS\Desktop\tutorial\2.globals.js

setInterval(() => {
  console.log("hello world")
},1000)