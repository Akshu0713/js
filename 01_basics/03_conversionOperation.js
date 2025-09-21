let score = "33"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score) //score is in string format, then convert into number
//console.log(typeof valueInNumber); // o/p: number (score ka dataType number hai)
//console.log(valueInNumber);

let score1 = "33abc"
let valueInNumber1 = Number(score1) //score is in string format, then convert into number
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1); // o/p: NaN (not a number) but NaN is type of number
                            //  convert nhi kr paya (string to number)...

let score2 = null
let valueInNumber2 = Number(score2)
//console.log(valueInNumber2); // o/p: 0

let score3 = undefined
let valueInNumber3 = Number(score3)
//console.log(valueInNumber3); // o/p: NaN 

let score4 = "Akshat"
let valueInNumber4 = Number(score4)
//console.log(valueInNumber4); // o/p: NaN (can't convert string to number)


// "33" => 33
// "33abc" => NaN
//  let score = true/false; o/p: true => 1; false => 0

// -----------x---------x----------x-----------x-----------x-------------x---------x

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
//console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "Akshat"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
//console.log(booleanIsLoggedIn2);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2); 
// console.log(2*2); 
// console.log(2**3); //power **
// console.log(2/3); 
// console.log(2%3); //remainder

let str1 = "Hello"
let str2 = " Akshat"

let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2) // conversion has happened inside string
// console.log(1 + 2 + "2") //first conversion based on numbers 1 + 2 = 3 then 
                            // conversion based on string which gives o/p: 32
// console.log( (3 + 4) * 5 % 3);


// console.log(true);
// console.log(+true);
// console.log(true+); // gives error
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; //prefix
gameCounter++; //postfix
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment








