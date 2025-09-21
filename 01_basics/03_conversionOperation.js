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
console.log(stringNumber);
console.log(typeof stringNumber);


