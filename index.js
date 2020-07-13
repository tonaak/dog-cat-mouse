var Dog = require('./Dog');
var Cat = require('./Cat');

var bull = new Dog('Bull');
var tom = new Cat();

bull.eat(tom);
console.log(bull);