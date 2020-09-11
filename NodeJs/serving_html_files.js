const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;
const content = fs.readFileSync("borders_and_backgrounds.html",'utf-8');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content_type':'text/html'});

    res.end(content)
});

server.listen(port,hostname,() => {
    console.log("Listening on port 80")
})
