
//    CONVERSION TO NUMBER
let score = "Amruta"

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0



//    CONVERSION TO BOOLEAN
let isLogedIn = "Amruta"
let booleanLI = Boolean(isLogedIn)
//console.log(booleanLI)

// 1 => true; 0 => false;    3/4/5..... => true
// "" => false
// "Amruta" => true



//    CONVERSION TO STRING
let number = 49
let string = String(number)
//console.log(string);
//console.log(typeof string);

//****************************************OPERATIONS***************************************** */
let value = 3
let negvalue = -value
console.log(negvalue);

let str1 = "Amruta"
let str2 = " Patil"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);  // 12
console.log(1 + "2");  // 12
console.log("1" + 2 + 2); // 122
console.log(4 + 2 + "2");



// PREFIX POSTFIX

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);   
// Expected output: "a:4, b:4"

// ++a : returns the value after increment
// a++ : returns the value before increment

let val = 100;
let val2 = ++val
console.log(val);  // 101  => returned after increment

console.log(val2);  // 101

let num = 100;
let num2 = num++
console.log(num);  // 100  => returned before increment

console.log(num2);   // 101  


