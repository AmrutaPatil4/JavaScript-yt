// datatypes are categorised based on how they stored in memory and accessed.
// Primitive
//7 types: String,Number, Boolean, Null(Empty), undefined(Variable is declared but value is not assigned), symbol(to make value unique), BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const temp = null // empty
let userEmail; // undefined

const id = Symbol('123')
const anotherid = Symbol('123') // result will be different

console.log(id === anotherid)

const bigNumber = 234567890987654n



// Reference type(Non-primitive)

// Array, Objects, Functions

const heros = ["Amruta", "Pushpa", "anu"];
let myObj ={
    name: "Ammu",
    age: 22,
}

const myFunction = function() {
        console.log("Hello World!");
        
}


const b = null;
console.log(typeof userEmail);
console.log(typeof a);
console.log(typeof b);  //**** */ typeof(null) ==> OBJECT
console.log(typeof myFunction); //FUNCTION
console.log(typeof heros);

// TYPE OF NON-PRIMITIVE DATATYPES IS ALWAYS ==OBJECT==