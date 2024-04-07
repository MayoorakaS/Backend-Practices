const EventEmitter = require('events');
const uuid = require('uuid');

//generate different type of ids
console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());

console.log(uuid.v1());
console.log(uuid.v1());


class Logger extends EventEmitter {
    log(msg){
        //call event
        this.emit('message', {id:uuid.v4(), msg:msg});
    }
}

module.exports = Logger;