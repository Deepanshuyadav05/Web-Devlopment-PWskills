class product {
    constructor(n){
        this.name = n;
    }
    display(){
        console.log(this)
    }
}
p = new product();
//by this print of 'p' we can see that display fn is directly not present on the 'p'
console.log(p)
//(run in browser) by this we can see that display fn is present in product.prototype
console.log(product.prototype)
//(run in browser) by this we can see that there is a hidden linking in 'p' and 'product' as we can directly access display which is not present in 'p'
console.log(p.display)
//(run in browser) or we can access that hidden link by '__proto__'
console.log(p.__proto__)




//As we know internally 'class' are 'Function' only
//if we want to create class by using function we can do it by
function Pro(n){
    this.name = n;
}
//class will do this 'Pro.prototype.display = function(){console.log(this)}' work automatically
Pro.prototype.display = function(){
    console.log(this)}
q = new Pro("Iphone")
//now we can see display fn is added to the prototype of pro
//by this we can create class using a fn
console.log(q)


//Inheritance
//now if we want to connect classes
class Event{
    bookEvent(){
        console.log("bookEvent");
    }
}
class Movie extends Event{
    showTime(){
        console.log("showTime");
}
}
//by this we will get 'showTime' fn
console.log(Movie.prototype)
//by this we will get 'bookEvent' fn
console.log(Movie.prototype.__proto__ )
/*by using this 'extend' keyword now the Movie.prototype will not point to Object.prototype,
but instead it will point to Event.prototype and Event.prototype will finally point to Object.prototype*/




//Call
//use to manipulate the 'this' where it has to point
const obj = {
    name:"deep",
    greet: function(welcome, msg){
        console.log("hello",this.name,welcome,msg);
    }
}
const newobj = {
    name:"ash"
}
//if we want to pass arguments then we can give them by comma separation
obj.greet.call(newobj,"hrll", "df")

//Apply
//same as call the only difference is it take only 2 argument
// i.> the object to which 'this' is to point
// ii.> an array of values which will passes to the fn
obj.greet.apply(newobj,["hello","hell"])

//Bind
//works similar link call but instead of immediately invoking the fn it stores it in a new fn, and we can use that fn any time we want
f = obj.greet.bind(newobj)
console.log(f("hello","hell"))