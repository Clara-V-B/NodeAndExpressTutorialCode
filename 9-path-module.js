const path = require('path');
//separator property that returns a platform specific separator
console.log(path.sep) //This returns my platform specific separator, osea \

//join method, join a secuence of path segments using that platform specific separator as the limiter and it returns a normalized resulting path
const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath); // \content\subfolder\text.txt

//basename method
const base = path.basename(filePath);
console.log(base); // text.txt

// resolve method returns an absolute path
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute); // C:\Users\OS\Desktop\tutorial\content\subfolder\text.txt