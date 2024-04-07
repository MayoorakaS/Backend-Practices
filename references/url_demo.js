const url =require('url');
const myUrl =  new URL('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox');

console.log(   `Serialized Url : ${myUrl.href}`);

console.log(myUrl.toString());
console.log("host root domain   " + myUrl.host);
console.log("host name   " + myUrl.hostname);
console.log("path " + myUrl.pathname);

console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append('123');
console.log(myUrl.searchParams);

