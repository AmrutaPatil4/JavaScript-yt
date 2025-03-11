const name ="Amruta"
const count = 50

// console.log(name + count + " value");

console.log(`Hello ${name}, how r u? value is ${count}`);

const myName = new String('AmrutaPatil')

console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('a'));

const gameName = new String('Java-script')
const newString = gameName.substring(1,5)  // (1,5) => 1 is included , 5 => excluded
console.log(newString);

const anotherString = gameName.slice(-4, 2)
console.log(anotherString);

const newStr = "   Ammu   "
console.log(newStr);

console.log(newStr.trim());  //trim => removes extra spaces

const url = "htttps://Ammu@134%20Patil"
console.log(url.replace("%20", "-"));

console.log(url.includes('ammu'));  // false
console.log(url.includes('Ammu'));  // true


console.log(gameName.split('-')) // String to array conversion  => [ 'Java', 'script' ]






