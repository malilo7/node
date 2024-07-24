// server.js
const http = require('http');
const hostname = '127.0.0.1';//localhost
const port = 3000;//port number for the server

const server = http.createServer((req, res)=>{
    res.statusCode = 200; //HTTP statusCode:200=0k
    res.setHeader('Content-Type','text/plain');
    res.end('Hello,world this is my first node.js server.\n');
});
