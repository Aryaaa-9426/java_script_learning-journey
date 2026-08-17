//for loop
for (let count = 1; count <= 5; count++) {
console.log("hello arya");
}

//while loop
let i = 1;

while (i <= 8) {
console.log("i", i);
i++;
}

//do while
let j = 8;

do {
console.log("apna clg");
j++;
} while (j <= 10);

// for of loop
let str2 = "apna college";

for (let i of str2) {
console.log(i);
}

//for in loop
let student = {
name: "arya",
age: 80,
cgpa: 9.8,
ispass: true,
};

for (let key in student) {
console.log(key, student[key]);
}

// print all even numbers from 0 to 100
let k = 0;

for (k = 0; k <= 100; k++) {
if (k % 2 == 0) {
console.log(k);
}
}

// create a game where you start with any random game number . ask the user to keep
// guessing the game number until the user enters correct value

let usernumber = Number(prompt("Guess the game number"));

let gamenum = 29;

while (usernumber != gamenum) {
    usernumber = Number(prompt("Wrong number! Guess again"));
}

console.log("You entered the correct number");

// string
let str = "arya singh";

console.log(str.length);
console.log(str[2]);

// template literals
// string interpolation
let specialString = `this is a template string`;

console.log(typeof specialString);

/* escape characters
theres lot of statement in console.log - \t is a escape character -
kuch kaam karke dete hai here \n is count as single character
if you want the length of "apna\tcllege"
output - 11
*/

//string methods

let str1= "apna clg";

let newstr = str1.toUpperCase();

console.log(newstr);


