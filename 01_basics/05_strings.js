const name = "Akshat"
const repoCount = 50

// console.log(name + repoCount + " Value"); //concatenate the strings

//In JavaScript, backticks (`` ` ``) are used to define template literals, also known as template strings. In modern Javascript(ES6)
//String interpolation: This method offers a more readable and 
// convenient way to embed expressions within strings compared to traditional string concatenation.
//to inject variable we use ${} sign
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//another syntax of Strings in Javascript
const gameName = new String('akshat-ag-com')

console.log(gameName[0]); 
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());