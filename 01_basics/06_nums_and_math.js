const score = 400
console.log(score);
console.log(typeof(score));



const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(typeof(balance.toString()));

console.log(balance.toString().length);
console.log(balance.toFixed(4));  // decimal numbers after . =>  100.0000

const otherNumber = 172.994
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString());  //1,000,000  -  US standard
console.log(hundreds.toLocaleString('en-IN')); // INDIAN standard




// +++++++++++++++++++  MATHS  +++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4.98));  // negative to positive
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));  // upper value
console.log(Math.floor(8.5));  // lower value
console.log(Math.sqrt(34));
console.log(Math.min(2,6,4,8,0));

console.log(Math.random());  // This value will be always between 0 and 1
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);








