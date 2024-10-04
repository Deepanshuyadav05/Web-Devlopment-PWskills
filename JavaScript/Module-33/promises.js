/*const pr = new Promise((res,rej) => {
    console.log("executor callback triggered by promise constructor")
})
console.log("created the promise object")
console.log(pr)    //its status is pending*/

//promise status
/*const p = new Promise((res,rej) => {
    console.log("executor callback triggered by promise constructor")
    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber % 2 === 0){
        res()
    }
    else{
        rej()
    }
})
console.log("created the promise object")
console.log(p)*/

//how status change from pending => fullfilled/rejected
//try on browser
/*const pp = new Promise(function exec(res,rej) {
    console.log("executor callback triggered by promise constructor")
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 5);
        console.log(randomNumber)
        if(randomNumber % 2 === 0){
            res()
        }
        else{
            rej()
        }
    }, 5000)
})
console.log("created the promise object")
console.log(pp)*/

//understanding micro/macro task queue
console.log("start")
setTimeout(function timerCB() {
    console.log("timer 1 done")
}, 1000);
const x = new Promise(function exec(res,rej){
    console.log("executor callback triggered by promise constructor")
    setTimeout(function xCB() {
        const randomNumber = Math.floor(Math.random() * 5);
        console.log(randomNumber)
        if (randomNumber % 2 === 0){
            res(randomNumber)
        }
        else{
            rej(randomNumber)
        }
    },2000)
});
x.then(function f(){console.log("executing f")}, function g(){console.log("executing g")})
x.then(function h(){console.log("executing h")}, function i(){console.log("executing i")})
for (let i = 0; i < 1000000000; i++){}
for (let i = 0; i < 1000000000; i++){}
console.log("end")