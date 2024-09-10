class product {
    #name     //by using '#' now these are private we cannot access them from outside the class but we can access them from inside the class
    #price
    description

    constructor(naam, kimat, baar) {
        this.#name = naam;
        this.#price = kimat;
        this.description = baar;
    }
    displayProduct(){
        console.log(this);
    }

    //Getter and Setter function
    setPrice(p){                  // set(any name like variable)
        //here we can put conditions also
        if(p >= 0){
            return this.#price = p;          //name of prop to access
        }
        else{
            return "invalid price";
        }
    }
    getPrice(){                              // get(any name like variable)
        return this.#price;                  //name of prop to access
    }

    //shorthand for getter and setter
    set name(n){                             //set(name of prop to change value)
        if(n.length> 3){
            console.log(this.#name = n);     //name of prop to assign value
        }
        else{
            console.log("invalid name") ;
        }
    }
    get name(){                               //get(name of prop to get the value)
        return this.#name;
    }


}
let p = new product("Iphone", 125000, "cool");
console.log(p)        //as we have make name and price private it is also not printing outside the class
p.displayProduct();
p.name = "samsung";     //this name is not #name JS has created a new value named as 'name'
console.log(p)

//accessing getter and setter
p.setPrice(100);              //it calls the setter function
console.log(p.getPrice());    //it calls the getter function

//accessing shorthand getter and setter
p.name = "OnePlus"      //it calls the setter function
console.log(p.name);    //it calls the getter function


//Class as wrapper on function
function maal(n,p,d){           //we don't have to use arrow fn here as it work lexical and didn't recognize 'maal' as a constructor and throw error
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayMaal = () =>{
        console.log("name:", this.name);
    }
}
let g = new maal("moto", 25000, "phone");
console.log(g)
console.log(g.displayMaal());

//static keyword
class phone {
    static x = 10;
    cconstructor(n,p){
        this.name = n;
        this.price = p;
    }
}
let p1 = new phone("redmi", 10000);
console.log(p1)    //static method is not accessed by object
phone.x = 20;       //we can update it also
console.log(phone.x)

//builder Object
//Design pattern 1
class person{
    constructor(builder){
        this.name = builder.name;
        if(builder.price>0){
            this.price = builder.price;
        }
        else{
            return {};
        }
        this.category = builder.category;
    }
}
const p3 = new person({name:"redmi",price: 10000,category: "human"});
console.log(p3)

