class product{
    name;
    price;
    description;
    constructor(builder){
        this.name  = builder.name;
        if(builder.price>0){
            this.price = builder.price;
        }
        this.description = builder.description;
    }

    static get builder(){
        return new(class builder{
        constructor(){
            this.name ="";
            this.price = 0;
            this.description = "";
        }
        setName(incomingName){
            this.name = incomingName;
            return this;
        }
        setPrice(incomingPrice){
            this.price = incomingPrice;
            return this;
        }
        setDescription(incomingDescription){
            this.description = incomingDescription;
            return this;
        }
        build(){
            return new product(this);
        }
      })();
    }
}
const p = product.builder
.setName("iphone")
.setPrice(125000)
.setDescription("mobile")
.build();


//Object Destruction
const products = {name: "iphone", price: 10000};
const {name, price} = products
console.log(name)
console.log(price)

//Destructuring an object inside another object
const pro = {naam:"iphone", keemat:12030, dis:"mob"};
const purchaseProduct = {orderID:492, orderDate:"2/43", ...pro}
//if we don't use spread operatorn then pro obj will not unpack
// const purchaseProduct = {orderID:492, orderDate:"2/43", pro}
console.log(purchaseProduct)

//Destructuring nested objects
const nest = {n:"samsung", p:125000, category:{dp:"deep", categoryID:"obc"}}
// method-I
//first unpack category in a variable and then unpack categoryID
const {category} = nest;
const {categoryID} = category;
console.log(categoryID)

//method-II
// here it only fetch dp nothing else
const {category : {dp}} = nest;
console.log(dp)