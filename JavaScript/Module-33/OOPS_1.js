
//*****classes******
class product{

    //Data Member (we don't have to declare these data member)
    name;
    price;
    category;
    description;
    rating;

    //Member Functions
    addToCart(){
        console.log("product added to cart")
    }
    removeFromCart(){
        console.log("product remove from cart")
    }
    displayProduct(){
        console.log("product display")
    }
    buyProduct(){
        console.log("product Bought")
    }
}

console.log(product)
console.log(typeof product) //typeof class is function

//constructor
class con{
    constructor(){
        console.log("my custom constructor")
    }
}

//*****Object in classes*****
let iphone = new product();
console.log(iphone)     /*if we print it then it returns us the data member with their values but when we run it on browser there we can see member functions also as prototype
and in browser we can also see a prototype name as 'constructor' which we have discussed that JS automatically creates
*/
//if we make our custom constructor
let hel = new con();
console.log(hel)          //it will be seen on browser

//********* how does new keyword work ************

//CASE-I
//if we return any object or even array(as array is also object) from the constructor then in that case it returns the returned object
//class demo {
//     naam;
//     keemat;
//     aukat;
//     constructor(){
//         console.log("my custom constructor")
//         return {x:10};
//     }
// }
// let piece = new demo();
// console.log(piece)

//if we return anything else or even not return anything except object or even array(as array is also object) from the constructor then in that case it returns the Data Members in key value pair
// class demo {
//     naam;
//     keemat;
//     aukat;
//     constructor(){
//         console.log("my custom constructor")
//         return 10;
//     }
// }
// let piece = new demo();
// console.log(piece)

//**************** Class using This ******************
// class demo {
//     naam;
//     keemat;
//     aukat;
//     constructor(name, price, category) {
//         this.naam = name;
//         this.keemat = price;
//         this.aukat = category;
//
//     }
// }
// let piece = new demo("iphone", 120000, "mobile");
// console.log(piece)

//actualy we even dont need the data members
class demo {

    constructor(name, price, category) {         //parameters
        //assigning values
        this.naam = name;
        this.keemat = price;
        this.aukat = category;

    }
}
let piece = new demo("iphone", 120000, "mobile");      //passing arguments
console.log(piece)

