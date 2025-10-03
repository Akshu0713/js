const name = "Akshat"
const repoCount = 50

// console.log(name + repoCount + " Value"); //concatenate the strings

//In JavaScript, backticks (`` ` ``) are used to define template literals, also known as template strings. In modern Javascript(ES6)
//String interpolation: This method offers a more readable and 
// convenient way to embed expressions within strings compared to traditional string concatenation.
//to inject variable we use ${} sign

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//another syntax of Strings in Javascript
const gameName = new String('akshat-ag-com') //invoke object
                                            //key-value me hote hai

// console.log(gameName[0]); 
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

//Use substring() when you need a more forgiving approach to index order and don't require the functionality of negative indices for counting from the end of the string.
//Use slice() when you need precise control over index order and want to leverage negative indices to extract portions of the string relative to its end.
//If either or both of the arguments are negative or NaN , the substring() method treats them as if they were 0 . 
//slice() also treats NaN arguments as 0 , but when it is given negative values it counts backwards from the end of the string to find the indexes.


