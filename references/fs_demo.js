//node references/fs_demo.js

const fs = require('fs');
const path = require('path');

//create a folder
fs.mkdir(path.join(__dirname, '/test'),{},function(err){
    if(err) throw err;
    console.log('Folder created..' );
});

//create and write to file

fs.writeFile(path.join(__dirname, '/test','hello.txt'),'Hello world',function(err){
    if(err) throw err;
    console.log('File written too..' );
//append file
    fs.appendFile(path.join(__dirname, '/test','hello.txt'),' I like to code ',function(err){
        if(err) throw err;
        console.log('File append too..' );
    });
});


