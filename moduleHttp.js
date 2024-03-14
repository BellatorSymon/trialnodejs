const http = require('http') //getting the module called http

const server = http.createServer((req, res) => { //req = request from user || res = response from server
    if (req.url === '/'){ //url is the url after the domain name (in local dev case will be localhost:portNum)
        res.end('<h1>Welcome to the EMPIRE!</h1>')
    }
    else if (req.url === '/about'){
        res.end('<h1>Who are WE?</h1><p>We are TOP Gs, we fight the matrix and feed children in wars</p>')
    }
    else {
        res.end(`<h1>Oops that page doesent exist</h1>
             <p>are you sure you are on the right url?</p>
             <a href="/">Click here to go to the home page</a>`)
        }
})

server.listen(5000) //basically puts the port of the server
