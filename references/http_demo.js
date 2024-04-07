const http = require('http');

//create a server object
http.createServer((req, res) => {
    //write the response
    res.write('hello world from server');
    res.end();
}).listen(5000,()=>console.log('Server running ....'));