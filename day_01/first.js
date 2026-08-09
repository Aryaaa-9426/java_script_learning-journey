// variables and data types

let name = "arya singh";
let age = 24;
let x = null; // no value - pta hai iske andar kuch nahi hai
let y = undefined; // pta hi nahi iske andar kya hai

console.log(name);
console.log(age);
console.log(x);
console.log(y);

let isfollow = true;
console.log(isfollow);


// object

const student = {
    fullName: "Arya Singh",
    age: 24,
    cgpa: 8.75,
    ispass: true
};

console.log(student.age);
console.log(student["fullName"]);

student.age = student.age + 1;
console.log(student.age);

console.log(typeof student);


// another object

const profile = {
    name: "shradhha khapra",
    posts: 195,
    followers: 560,
    following: 4,
    email: "@shradhhakhapra",
    designation: "entrepreneur",
    experience: "apna college"
};


// arithmetic operators

let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


// assignment operators

let c = 5;

c += 4;
console.log(c);


// comparison operators

let d = 5;
let e = 10;

console.log(d == e);
console.log(d != e);
console.log(d > e);
console.log(d < e);
console.log(d >= e);
console.log(d <= e);
console.log(d === e);
console.log(d !== e);


// logical operators

let p = true;
let q = false;

console.log(p && q);
console.log(p || q);
console.log(!p);


// logical operators with conditions

let num1 = 6;
let num2 = 5;

let cond1 = num1 > num2;
let cond2 = num1 == num2;

console.log("cond1 && cond2 =", cond1 && cond2);


// conditional statement

let mode = "darkmode";
let color;

if (mode === "darkmode") {
    color = "black";
}

if (mode === "lightmode") {
    color = "light";
}

console.log(color);


// voting

let votingAge = 25;

if (votingAge > 18) {
    console.log("you can vote my brother");
}


// if else if

let personAge = 18;

if (personAge < 18) {
    console.log("junior");
}
else if (personAge > 60) {
    console.log("senior");
}
else {
    console.log("middle");
}


// ternary operator

let age2 = 25;

let result = age2 > 18 ? "adult" : "not adult";

console.log(result);


// prompt
// prompt = pop up msg + takes input
// alert = only shows pop up msg


// grade calculator

let score = prompt("enter your score (0-100)");

if (score >= 90 && score <= 100) {
    console.log("grade A");
}
else if (score >= 70 && score <= 89) {
    console.log("grade B");
}
else if (score >= 60 && score <= 69) {
    console.log("grade C");
}
else {
    console.log("grade D");
}