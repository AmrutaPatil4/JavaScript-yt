console.log("2" > 1)

console.log(null > 0)

//    ==   Loose Equality  => compares the values, eventhough datatypes are different
console.log(5 == "5");  // true (string "5" is converted to number 5)
console.log(false == 0); // true (false is converted to 0)

//   === (Strict Equality) 
//   Does not perform type conversion and directly compares both value and type.
//   If the values are of different types, it returns false without attempting any conversion.

console.log(5 === "5"); // false (different types: number vs string)
console.log(false === 0); // false (boolean vs number)
