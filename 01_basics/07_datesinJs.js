//Dates:  Date is an object in javascript

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //Date is object dataType

let myCreatedDate = new Date(2023, 0, 23) //month starts from 0-> Jan, 1-> Feb, 2-> Mar...
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14") // YYYY-MM-DD
// console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("01-14-2023") //MM-DD-YYYY
// console.log(myCreatedDate3.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp); // gives time in mili secs
// console.log(myCreatedDate3.getTime()); //compare hamesa mili secs me karege
// console.log(Math.floor(Date.now()/1000)); //convert milisecs to secs


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1); //end user can get the exactly the correct values that are available.
console.log(newDate.getDay()); // 0-> Sunday, 1-> Monday

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})



