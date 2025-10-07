//An object is a fundamental data type used to store collections of related data and/or functionality. 
// It is essentially a collection of key-value pairs

// singleton
//A singleton object is a class that can only have a single instance throughout the application's lifetime, 
// providing a global point of access to that unique object

// Object.create (constructor method)
//if we create object from construtor then it will be singleton


// object literals (they are not singleton)
const mySym = Symbol("key1")

const JsUser = {                   //Object Declare
    name: "Akshat",
    "full name": "Akshat Gupta",
    [mySym]: "mykey1",  // [mySym] is declare as a symbol, if we write mySym: "myKey1" then mySym is declare as a string.
    age: 23,
    location: "Gwalior",
    email: "akshat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Object Access

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "akshat@chatgpt.com" // "=" with this sign we change email of an object(JsUser)
// Object.freeze(JsUser)
JsUser.email = "akshat@microsoft.com"
// console.log(JsUser);
// Object.freeze() in JavaScript is a built-in method that makes an object immutable, meaning its properties cannot be changed after the object has been frozen.
//Syntax: Object.freeze(obj);
//Where obj is the object to be frozen. The method returns the same object, now frozen.

JsUser.greeting  = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo  = function(){
    console.log(`Hello JS user, ${this.name}`); //we use THIS to referncce the same object
    
}

console.log(JsUser.greeting); //returns the function has not been executed, only the refernce of the function has come.
console.log(JsUser.greeting()); // O/P: Hello JS user 
                                //      Undefined

console.log(JsUser.greetingTwo());


