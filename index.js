var fact = require("factorial");
var sumOfDigits = require("sumOfDigits");
let a=3;
console.log(fact(a));

const fs = require("fs");
console.log("text1");
console.log(fs.readFileSync("demo2/rohit.txt","utf-8"));
const file = fs.readFile("example.txt",()=>console.log("text2"))
console.log("text3");


console.log(sumOfDigits(181));