//*****global scope*****
//here the variable is accessible from anywhere in the program
// let x = 10;        //scope of x is global
// function fun(){
//     console.log(x);
// }
// fun()

//*****function scope*****
//here the variable is accessible only inside the function where it is declared
// function fun(){
//     let x = 10;        //scope of x is functional
//     console.log(x);
// }
// fun()
// console.log(x);     //if we try to access the function scope outside it then it will throw error

//*****Block scope*****
//here the variable is accessible only inside the block where it is declared
// {
//     let x = 10;     //scope of x is block scope
//     console.log(x);    //it will print 10
// }
// console.log(x);   //it will throw error as we try to access the block variable outside the block

//*****difference between function and block scope as both of them use {}*****
// function fun(){
//     console.log(x);
//     var x = 10;    //Here x is being used before declaration, and this code works, because x has function scope due to var hence x is visible through the code.
// }
// fun();
// function gun(){
//     console.log(x);
//     let x = 10;      //here let has block scope
// }
// gun();
/*
A variable having function scope has a special property, that it can be defined anywhere in the
function but will be still accessible through the whole function.
*/

//*****scope resolution and execution of code (phase-I, phase-II)*****
//Explanation of all code example are in PWskills module 32 and in notes
//Example-I
// var teacher = "deep";
// function fun(){
//     var teacher = "yadav";
//     console.log("hello",teacher);
// }
// function gun(){
//     var student = "aman";
//     console.log(student);
// }
// fun();
// gun();

//Example-II
// var teacher = "deep";
// function fun(){
//     var teacher = "yadav";
//     console.log("hello",teacher);
// }
// function gun(){
//     var student = "aman";
//     console.log(student,teacher);
// }
// fun();
// gun();

//Example-III
// var teacher = "deep";
// function fun(){
//     var teacher = "yadav";
//     console.log("hello",teacher);
//     function gun(){
//         var student = "aman";
//         console.log(student,teacher);
//     }
//     gun();
// }
// fun();

//Example-IV (auto global concept comes here)
// var teacher = "deep";
// function fun(){
//     teacher = "yadav";
//     content = "JS"
//     console.log("hello",teacher,content);
// }
// fun();
// console.log(teacher);
// console.log(content);

//Example-V (it will throw error as auto global does't work on RHS)
// var teacher = "deep";
// function fun(){
//     teacher = "yadav";
//     content = "JS"
//     console.log("hello",teacher,content);
// }
// console.log(teacher);
// console.log(content);
// fun();

//Example-VI
// var x = 10;
// if(true){
//     var x = 20;
//     var y = 30;
//     console.log(x, y);
// }
// console.log(x,y);

// Example-VII
// var x = 10;
// console.log(x, y);
// if(true){
//     var x = 20;
//     var y = 30;
//     console.log(x, y);
// }
// console.log(x,y);


//Let and Const
//it throws error as 'x' is initialized by 'let' and let has block scope
// function fun(){
//     console.log(x)
//     let x = 10     //here 'x' get block scope
//     console.log(x)
// }
// fun()


//here it throw compile time error (phase I)
// function solve() {
//     {
//         console.log(x)  //Temporal dead zone
//         const x
//         x = 5;
//         console.log(x)
//     }
// }
// console.log("start")
// solve()

//here it throw run time error( phase II)
function solve() {
    {
        console.log(x)   //Temporal dead zone
        let x
        x = 5;
        console.log(x)
    }
}
console.log("start")
solve()