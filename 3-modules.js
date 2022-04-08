// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum, what I want)
const {john, peter} = require('./4-first-module-names')
const sayHi = require('./5-second-module')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(data)
sayHi('susan')
sayHi(john)
sayHi(peter)

/* const names = require('./4-first-module-names')
const sayHi = require('./5-second-module')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter) */