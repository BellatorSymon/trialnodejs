const {readFile, writeFile} = require('fs') //async way --> will be executed when a previous
//action will be completed

readFile('./moduli/content/topg.txt', 'utf8', (err, res) => { //should return the content of the file
    if (err) {
        console.log("there was an error while reading a file")
        return
    }
    console.log(res)
})

console.log("starting to write the first file")
writeFile('./moduli/content/sus-async.txt', 'COME ON MAN, THATS TOO EASY!', (err, res) => { //should write on a file in the path
    if (err) {
        console.log("there was an error while writing a file")
        return
    }
    console.log("finished writing the first file")
})
console.log("writing second file")