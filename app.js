const http = require('http');

const server = http.createServer((req,res) => {
    res.write('<h1>Hello world</h1>');
})

server.listen(8080,'localhost');
