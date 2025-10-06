const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); //the problem is we insert array in array so the output is wrong. javascript any type of data entry.
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);
// The spread operator in JavaScript, denoted by three consecutive dots (...), is a powerful syntax that allows you to 
// expand iterable objects (like arrays or strings) into individual elements, or to expand object properties into a new object. 

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// In JavaScript, the flat() method is an Array.prototype method used to create a new array with all sub-array elements concatenated into it recursively up to a specified depth. 
// This effectively "flattens" a nested array, reducing its nesting level. 
// How it works:
// Syntax: arr.flat(depth)
// arr: The array on which the flat() method is called.
// depth (optional): An integer specifying how deep the method should flatten the nested arrays. 
// The default value for depth is 1.
// If depth is set to Infinity, the array will be flattened completely, regardless of the nesting level.
// Key characteristics: Returns a new array, Removes empty slots, Browser support



console.log(Array.isArray("Akshat"));
//Array.isArray() is a static method used to determine whether a given value is an array. It returns true if the value is an array and false otherwise. 

console.log(Array.from("Akshat")); 
//This method is used to create a new, shallow-copied Array instance from an array-like or iterable object.

console.log(Array.from({name: "Akshat"})); //Gives empty array // INTRESTING

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.

