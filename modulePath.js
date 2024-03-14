//path module

const path = require('path') //gets the path module into the variable

const filePath = path.join('/moduli', 'content', 'lol.txt') //returns the value of the specific path
console.log(filePath) //prints the full path

const fileName = path.basename(filePath) //returns the name of the "deepest" file in the directory
console.log(fileName)

// const absolutePath = path.resolve(__dirname, 'moduli', 'content', 'lol.txt') 
//returns the absolute path of the directory

const absolutePath = path.resolve(__dirname, 'moduli/content/lol.txt') //returns the absolute path of the directory

//given as a value in a variable
console.log(absolutePath)
