const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 8080;
const app = express();

const sample_server = http.createServer(app);

sample_server.listen(port,hostname, ()=>{
    console.log("server is running");
});




