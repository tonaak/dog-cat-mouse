var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var bull = new Dog('Bull');
var tom = new Cat();
var mickey = new Mouse('mickey');

try {
	tom.eat(bull);
} catch(error) {
	console.log('Error while a cat eating a dog'); 	
}

console.log(tom);