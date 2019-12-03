
const http = require("http");
const os = require("os");
const greeting = require("./greeting");
//module s userom
const User = require("./user.js");
let eugene = new User("Eugene", 32);
eugene.sayHi();


//morning evening
const welcome = require("./welcome");
welcome.getMorningMessage();
welcome.getEveningMessage();
console.log("---");

// получим имя текущего пользователя
let userName = os.userInfo().username;

//global naem
global.name = "Eugene";
global.console.log(date);
console.log(greeting.getMessage());
console.log("---");

http.createServer(function(request,response){
response.end("Hello NodeJS kuz!");
}).listen(3000, "127.0.0.1",function(){
console.log("Сервер начал прослушивание запросов на порту 3000");
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));


});

// Теперь запустим приложение с помощью следующей команды:
// node app.js Tom 23 - это те значения, которые
// помещаются соответственно  в process.argv[2] и process.argv[3]

console.log("---");
console.log("poluchim imya i vozrast");
let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);


console.log("---");
console.log("asinxron");
function display(data, callback){
// с помощью случайного числа определяем ошибку
var randInt = Math.random() * (10 - 1) + 1;
var err = randInt>9? new Error("Ошибка выполнения. randInt больше 5"): null;
setTimeout(function(){
callback(err, data); 
}, 0); }
console.log("Начало работы программы asinxr 1");
display("Обработка данных...", function (err, data){
if(err) throw err;
console.log(data); });
console.log("Завершение работы программы asinxr 1");
console.log("---");


//vtoroi asinxron
function displaySync(callback){
callback();}
console.log("Начало работы программы 2asinxron");
setTimeout(function(){
console.log("timeout 500");}, 500);
setTimeout(function(){
console.log("timeout 100");}, 100);
displaySync(function(){console.log("without timeout")});
console.log("Завершение работы программы 2 asinxron");
console.log("---");


console.log("--- Чтение");
const fs = require("fs");
// асинхронное чтение
fs.readFile("hello.txt", "utf8", 
function(error,data){
console.log("Асинхронное чтение файла");
if(error) throw error; // если возникла ошибка
console.log(data);  // выводим считанные данные
});
// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
console.log("---");

//zapisvFile
fs.writeFile("hello2.txt", "Hello world!", function(error){
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. ");
    let data = fs.readFileSync("hello2.txt", "utf8");
    console.log(data); });


fs.appendFileSync("hello.txt", "HelloW");
fs.appendFile("hello2.txt", "helloagain", function(error){
    if(error) throw error; // если возникла ошибка      
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello2.txt", "utf8");
    console.log(data); });
