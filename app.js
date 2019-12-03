const http = require("http");
const os = require("os");



http.createServer(function (request, response) {
    response.end("Hello NodeJS kuz!");
}).listen(3000, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3000");
});



const fs = require("fs");
const zlib = require("zlib");
let readableStream = fs.createReadStream("hello.txt", "utf8");
let writeableStream = fs.createWriteStream("hello.txt.gz");
let gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(writeableStream);