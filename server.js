const http = require("http");
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {
   if (req.method === 'GET' && req.url === '/contact'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(path.resolve(__dirname, "contact.html")).pipe(res)
    }
    else if (req.method === 'GET' && req.url === '/aboutme') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(path.resolve(__dirname, "aboutMe.html")).pipe(res)
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(path.resolve(__dirname, "biodata.html")).pipe(res)
    }
    
    
});
server.listen(8000, () => {
    console.log(`Server is up and running`);
});