const score = 400
// console.log(score);
const balance = new Number(100) //to define explicit an new object of type NUMBER
// console.log(balance);

// console.log(balance.toString()) // Number to String (it is a prototype)
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); 
//The toFixed() method in JavaScript is a Number.prototype method used to 
//format a number as a string with a specified number of digits after the decimal point.

 const otherNumer = 123.8966
// console.log(otherNumer.toPrecision(3)); // it converts the number to string

 const otherNumer1 = 1123.8966
// console.log(otherNumer1.toPrecision(3)); //// it converts the number to string

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
//The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date in the local timezone.



// +++++++++++++ Maths +++++++++++++++++++++++++++++


// console.log(Math) //it is an object

// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// console.log(Math.round(4.3));
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.3)); //Math. ceil() increases the number to the next whole number.
// console.log(Math.floor(4.7)); //Math.floor() is a static method of the built-in Math object that rounds down a number to the nearest integer. 
// // It returns the largest integer less than or equal to the given number. 

// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random())
//This method returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). 
// This means the number will always be greater than or equal to 0 and strictly less than 1.
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );
