//call the object from person.js
//const person = require('./person');
//console.log(person.name);

const Person = require('./person');
const person1 = new Person('John', 34);
person1.greeting();

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', function(data){
console.log(`CalledcListener: ${data}`);
});
console.log(`Hello, ${person1.name}`);

