//node references/path_demo.js

const path =require('path');

//base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__dirname));

//file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).root);

//concatenate paths
console.log(path.join(__dirname,'test','helloworld.js'));