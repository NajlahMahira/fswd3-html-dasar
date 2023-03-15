// Basic Function
console.log("~~Basic Function~~");
function salam1(){
    console.log("1. Hello World!");
}
salam1();

// Function Expression
console.log("~~Function Expression~~");
let salam2 = function(){
    console.log("2. Hello World!");
}
salam2();

// Arrow Function
console.log("~~Arrow Function~~");
var salam3 = () => {
    console.log("3. Hello World!");
}

var salam4 = () => console.log("4. Hello World!");

salam3();
salam4();
