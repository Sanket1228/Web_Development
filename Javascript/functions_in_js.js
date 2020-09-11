console.log("Sanket Patil");

function greet(name,greeText="Greeting from Javascript") {
    let name1 = "Name1";
    console.log(greeText + " " + name1);
    console.log(name + " is very good boy");   
}

let name = "Sanket";
let name1 = "Nilesh";
let name2 = "Divakar";
let name3 = "Shantaram";
let greeText1 = "Good Afternoon";
greet(name,greeText1);
greet(name1,greeText1);
greet(name2,greeText1);
greet(name3);

function sum(a,b,c) {
    let d = a + b + c;
    return d;
}

let res = sum(1,2,3);
console.log(res)