function User(name, age){
this.name = name;
this.age = age;
this.displayInfo = function(){console.log(`���: ${this.name}� �������: ${this.age}`);}}
User.prototype.sayHi = function(){console.log(`Privet, menya zovut ${this.name}`);};
module.exports = User;
