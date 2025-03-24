const heros = ["Sudeep", 'Yash']
const heroines = ['Amrutha', 'Anupama', 'Neha', 'Ramya']

// heros.push(heroines)  // ['Sudeep','Yash', ['Amrutha', 'Anupama'] ]
 
// console.log(heros[4][2])

//CONCAT
// const all = heros.concat(heroines)   // [ 'Sudeep', 'Yash', 'Amrutha', 'Anupama', 'Neha', 'Ramya' ]
// console.log(all);


//SPREAD OPERATOR

const all = [...heros, ...heroines]  // [ 'Sudeep', 'Yash', 'Amrutha', 'Anupama', 'Neha', 'Ramya' ]
console.log(all);
// if 3 then
// [...heros, ...heroines...3rd...4th] 


const another_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]

//flat  =>  [1, 2, 3, 4,  5,6, 7, 8, 9, 10]
const real_arr = another_array.flat(Infinity)
console.log(real_arr);


console.log(Array.isArray('Ammu'));  // false //  The Array.isArray() method checks if a given value is an array and returns true or false.
console.log(Array.isArray([1, 2]));  // true


console.log(Array.from("Amruta")); // [ 'A', 'm', 'r', 'u', 't', 'a' ]
console.log(Array.from("215452")); // [ '2', '1', '5', '4', '5', '2' ]

console.log(Array.from({name: "ammu"})); // []  => it won't understands what should be converted

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));  //  [ 100, 200, 300 ]
