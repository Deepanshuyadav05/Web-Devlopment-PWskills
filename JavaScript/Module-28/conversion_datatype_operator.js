//string to number conversion
let score = "deep";

console.log(typeof score);

let Newnum = Number(score)
console.log(Newnum);
console.log(typeof Newnum);

// "33" => 33 (get converted and type is number)
// "33abc" => NaN (but type is number)

// string to boolean conversion
let name = "deep";
let bool = Boolean(name);
console.log(typeof bool);
console.log(bool);

// false will come when => o,-o,on(BigInt value), ""(empty string), Null, undefined, NaN
// in all other values it will print true

//Number to string conversion
let num=35;

let newnum= String(num);
console.log(typeof newnum);
console.log(newnum);


// ******Operations******
console.log(3+2);        //Add
console.log(2-2);        //subtract
console.log(2*2);        //multiply
console.log(2/2);        //divide
console.log(2%2);        //modulo
console.log(2**2);       //power

let str1 = "deep";
let str2 = "anshu";
let str3 = str1 + str2;
console.log(str3);

let check = "1"+2;    //in these case it will be added like string
let check2 = 1+"2";   //in these case it will be added like string
let check3 = 1+4+"3"; //here number is first so the number will be added normally then it get added to string
let check4 = "2"+3+1;  //here string is first so all will be added like string
let check5 = 3+"2"+1;  //here string is in between so it will added like string
console.log(check);
console.log(check2);
console.log(check3);
console.log(check4);
console.log(check5);

