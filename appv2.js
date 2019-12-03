
const http = require("http");
const os = require("os");



http.createServer(function(request,response){
response.end("Hello NodeJS kuz!");
}).listen(3000, "127.0.0.1",function(){
console.log("Сервер начал прослушивание запросов на порту 3000");
});


const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";

emitter.on(eventName, function(){
    console.log("Hello all!");
});
emitter.on(eventName, function(){
    console.log("Привет!");
});
emitter.emit(eventName);
emitter.on(eventName, function(data){
 console.log(data);
});
emitter.emit(eventName, "Привет пир!");

const util = require("util");
const EventEmitter = require("events");
function User(){ }
util.inherits(User, EventEmitter);
let eventName1 = "greet";
User.prototype.sayHi = function(data){
this.emit(eventName1, data); }
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName1, function(data){
console.log(data); });
user.sayHi("Мне нужна твоя одежда...");


const fs = require("fs");
let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
let readableStream = fs.createReadStream("hello.txt", "utf8");
readableStream.on("data", function(chunk){ 
console.log(chunk);
});


