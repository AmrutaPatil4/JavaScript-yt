let myDate = new Date()  // Object creation
console.log(myDate.toString()); // Wed Mar 12 2025 15:44:38 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  // Wed Mar 12 2025
console.log(myDate.toLocaleString());  // 3/12/2025, 3:44:38 PM
console.log(myDate.toLocaleDateString());  //  3/12/2025
console.log(typeof myDate);  // object


// let myCreatedDate = new Date(2025, 1, 24) // Mon Feb 24 2025 =>  month starts from 0
// let myCreatedDate = new Date(2025, 1, 24, 5, 8, 55)  // 2/24/2025, 5:08:55 AM
let myCreatedDate = new Date("01-14-2025") // 1/14/2025
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // Date.now() => gives time in milliseconds

// console.log(myTimeStamp); // time in milliseconds
// console.log(myCreatedDate.getTime()); // converted time to milliseconds
console.log(Math.floor(Date.now()/1000));  //  converting milliseconds to seconds (It gives decimal...so using Math.floor)
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // 3 => Month
console.log(newDate.getDate()); // 12 => Date
console.log(newDate.getFullYear()); // 2025 => Year


newDate.toLocaleString('default', {
    weekday: "long"
})



