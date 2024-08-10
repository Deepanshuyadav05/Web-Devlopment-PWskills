const accNumber = 123;   //we have to assign the value to const at the time of declaration
let adderess = "Kosli";   //we can declare string in double and single quotes
var name = "Deanship";   //nowadays, we generally not use var due to scope issue
houseNo = 161;                   //we can assign variable without datatype (it is not recommended)
let declare;                     //we can only declare variable without assigning value to it

console.log(accNumber);           //it use to print data on terminal
console.table([accNumber, adderess, name, houseNo, declare]);    //it uses to print multiple variable at same time in tabular form

//type of(used to check the datatype of a variable)
console.log(typeof(declare));            //when we don't assign a value and then check its datatype then it is undefined
console.log(typeof(houseNo));
console.log([typeof(accNumber),typeof(adderess),typeof(name),typeof(houseNo),typeof(declare)]);
