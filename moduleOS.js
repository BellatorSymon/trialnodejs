//os module
const os = require('os') //we are accessing the built in module OS

const user = os.userInfo() //returning information about the user of the pc
const timeActive = os.uptime() //returns in seconds the amount of time the system has been active

console.log(user)
console.log(`The system has been running for ${timeActive} seconds`)

const infoOS = { //some info about the OS, accessible via methods of the os module
    name: os.type(),
    release: os.release(),
    fullmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(infoOS)