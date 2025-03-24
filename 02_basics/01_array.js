//Array  => Resizeable, can contain mix of diff datatypes, zero-indexed, shallow copy(share the same reference)

const myArr = [0, 1, 2, 3, 4, 5]
const arr2 = ["Ammu", "Patil"]

const myarr2 = new Array(1, 2, 5, 8)
// console.log(myArr[0]);
// console.log(arr2);
// console.log(myarr2);

// console.log(myArr);


//METHODS 

// myArr.push(6)
// myArr.push(7) // adds element to last
// myArr.pop() // removes last element

// myArr.unshift(9) // adds element to first
// myArr.shift() // removes first element

// console.log(myArr.includes(8)); false
// console.log(myArr.indexOf(3)); 3

const newArr = myArr.join() //  values converted to string

// console.log(typeof newArr);

// console.log(myArr);


//  slice,  splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3)

console.log(myn1);  // [ 1, 2 ]
console.log("B ", myArr);  //  B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3) // splice manipulates original array
console.log("C ", myArr);  // C  [ 0, 4, 5 ]
console.log(myn2);  // [ 1, 2, 3 ]






