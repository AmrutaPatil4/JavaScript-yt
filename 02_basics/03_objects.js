//Object literals => In JavaScript, an object is a collection of key-value pairs, where the keys (also called properties) are strings, and the values can be any data type, including other objects and functions.

const mySym = Symbol("key1")

const JsUser = {
    name : 'Amruta',
    age : 24,
    "full name" : "Ammu Patil",
    [mySym] : "mykey1",
    email : "Ammu@gmail.com",
    location : "Bangalore",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

const mySym2 =Symbol("key1");
// console.log(typeof mySym2);

//changing values
JsUser.age = 28
// console.log(JsUser.age);

//Once object is freezed, values cannot be changed
// Object.freeze(JsUser)

JsUser.age = 29
// console.log(JsUser.age); // 28

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hi Amruta");
    
}
console.log(JsUser.greeting); // [Function (anonymous)]

// console.log(JsUser.greeting());





