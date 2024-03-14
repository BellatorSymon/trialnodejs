//Node JS uses library called Common JS and every file is a MODULE!
//Modules - encapsulated code (where we share only what we want -> the minimum)

const names = require('./3-names')
const sayHi = require('./3-functions')
require('./4-mind-granade') //if we have some functions in that specific module, it will run

// sayHi('DIEEEESSSS')
// sayHi(names.peppino)
// sayHi(names.giulio)