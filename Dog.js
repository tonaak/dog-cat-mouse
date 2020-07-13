function Dog(name) {
	this.stomach = [];
	this.name = name;
}

var chalk = require('chalk');

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

Dog.prototype.sayHi = function() {
	console.log('Hi! I am a dog. My name is ' + chalk.yellow(this.name));
};

module.exports = Dog;

