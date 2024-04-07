//create a class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

//export class
module.exports = Person;

// create an object
/*const person ={
    name:"John",
    age:"16",
}
//export object
module.exports = person; */

