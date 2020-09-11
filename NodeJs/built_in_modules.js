const fs = require("fs");
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    let text = fs.readFileSync("practise.txt", "utf-8");
    text = text.replace("Sanket", "Ganesh");

    console.log("The content of the file is ");
    console.log(text);

    console.log("Creating a new file.....")
    fs.writeFileSync("sanket.txt", text);
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }); 