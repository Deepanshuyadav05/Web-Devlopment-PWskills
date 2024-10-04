const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("timer of pr")
        resolve(5000);
    })
})
const p2 = pr.then(function a() {console.log("a"), function b(){console.log("b")}})
//p2 is new promise created by pr.then
const p3 = pr.then(function c() {console.log("c"), function d(){console.log("d")}})
//p3 is also a new promise created by pr.then


//resolving p2(see in browser)
//if we didn't return manually then JS will automatically return undefined and assign it to p2 value
const p4 = pr.then(function d() {return "deep"})

// ******throw keyword******
//used to manually throw the error/exception in owr code
function manualException(){
    let RN = Math.floor(Math.random()*10);
    console.log(RN)
    if(RN %2 === 0){
        return "even"
    }
    else{
        throw "undesirable number"
    }
}
console.log(manualException())

//when our p2 will be rejected
//it will reject when our promise is rejected
const p5 = pr.then(function c() {throw 99})
