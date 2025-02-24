const accId = 12345
let accMail = "amruta@gmail.com"
var accPassword = "98765"
accCity = "Bangalore"
let accState;      // Undefined

// accId = 56789 ....Assignment to constant variable NOT POSSIBLE

accMail = "ammu@gmail.com"
accPassword = "11111"
accCity = "Belagavi"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accId);
console.table([accId,accMail,accPassword,accCity,accState])
