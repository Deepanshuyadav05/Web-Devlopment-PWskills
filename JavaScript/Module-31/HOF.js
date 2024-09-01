//when function is passed as a argument to other fn then it is call HOF
function sole(x,fn){
    console.log(x);
    fn()
}
sole(10, function (){    //we can declare the fn here itself or we can create a fn add pass the name of fn
    console.log("help");
})

//or we can do it like
function wait(){
    console.log("I am comming");
}
sole(23,wait)     //we don't have to use parenthesis to pass the name of the fn

//callstack and async nature of JS

// console.log("come on");
// setTimeout(wait,1000);   //JS is synchronous in nature mean it execute code line  by line
// // but here code doesn't stop for setTimeOut fn to fully execute(complete the timer and print) but it move to next line and execute rest of the code so there will be question then how JS is synchronous
// // so the ans is the anything which is natively defined in JS like loop,if,else and all that they all are synchronous
// // but in case of STO here the concept of runTimeEnvironment comes in picture as the STO is the feature of RTE not of JS so anytime a task come which is time consuming and not the native task of JS then JS trigger the RTE/browser and move to execute rest of the code
// // now behind the scene a timer starts in the browser
// // so after that event loop and callback come which we can see it the video (Module 31 - HOF video - 19min)
// console.log("why you come");


console.log("come on");
setTimeout(wait,100);
for (let i = 1; i<=10000000000; i++){}     //here the code stop for 'for loop' to execute and then print STO
console.log("why you come");












