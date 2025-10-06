//array

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9) //Not useful and time consuming
// myArr.shift()
//shift() removes from the beginning, unshift() adds to the beginning.
// Both methods modify the original array in place.
// shift() returns the removed element, while unshift() returns the new array length.


// console.log(myArr.includes(9)); // element daale ge and pta chal jaye ga ki array me hai ya nhi
// console.log(myArr.indexOf(3)); //element daale ge and uska index pta chal jayega

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
//join() method is a built-in Array method used to create and return a new string by concatenating all of the elements in an array. 



//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. 
// Use when you need to extract a portion of an array without modifying it.


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); //** original array will manipulated in splice. ***
console.log(myn2);
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed. 
// Use when you need to add, remove, or replace elements within an array.










// SUMMARRY:

// 1. Array is written in brackets [].
// 2.Array data type is an object and resizable.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.
// 6. Array makes shallow copy(copies whose properties share the same references as those of source object.)
//  Deep Copy(copies whose properties do not share the same references as those of source object.)

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.

