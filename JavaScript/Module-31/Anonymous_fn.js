//functions that doesn't have any name are called anonymous function

//using variable instead of name
let x = function (x){
    console.log("hello");
    console.log(x);

}
x(2)              //we can call it  by variable name
console.log(x(2));

//Immediately invoke function expression
//it can be used single time in the code
//here when we have to declare and call the fn at the same time then we use this fn
(function hell(){          //here we cover the fn with parenthesis to create this fn
    console.log("hello");
})();    //atlast we put empty parenthesis to call the function at the same time