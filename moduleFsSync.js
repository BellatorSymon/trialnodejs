// const fs = require('fs') this is the old slow way to access some thing in a module
// fs.readFileSync because then you will have to type this and this is slow,
//so do this instead:

const {readFileSync, writeFileSync} = require('fs') //ez access, no fs.wtv needed :D

const firstFile = readFileSync('./moduli/content/topg.txt', 'utf8') //returns the content of the file
const secondFile = readFileSync('./moduli/content/bottomg.txt', 'utf8')


console.log(`Content of first file: ${firstFile}`)
console.log(`Content of second file: ${secondFile}`)

console.log("doing first write task")
writeFileSync('./moduli/content/sus.txt', 'AYO THIS WAS CREATED BY A NODE JS SCRIPT WHAT THE HELL?')
console.log("finished first task")
console.log("started second task")