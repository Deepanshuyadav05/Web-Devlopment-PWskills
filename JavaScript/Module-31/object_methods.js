let product = {
    name: "Iphone",
    company: "Apple",
    price: 126000,
    warenty: "1 year",
    color: "Black"
}
//Keys()
//use to return the keys of the object in the form of array of string
console.log(Object.keys(product));

//values()
//use to return the value of the object in the form of array of string
console.log(Object.values(product))

//Entries()
//use to return both key-value pair of the object in the form of array of string
console.log(Object.entries(product))

//Seal()
//by using it we can't add or delete a key-value from the object
//but we can modify existing key-value
Object.seal(product)
product.name = "S23"
product.feature = "camera"     //not work due to seal
delete product.warenty         //not work due to seal
console.log(product)

//freeze()
//by using it we can't add, delete or even modify the key-value from the object
//it is the highest level of immutability
Object.freeze(product)
product.name = "Iphone"        //not work due to freeze
product.feature = "camera"     //not work due to freeze
delete product.warenty         //not work due to freeze
console.log(product)

//isSeal()
//it is used to check if the object is sealed or not
//it returns boolean value
//even if the object is freeze then also it returns true
console.log(Object.isSealed(product))

//isFrozen()
//it is used to check if the object is freeze or not
//it returns boolean value
console.log(Object.isFrozen(product))

//PreventExtension()
//it half work as seal it doesn't allow us to add the key-value pair in the object, but we can delete and modify the existing
Object.preventExtensions(product)
product.feature = "camera"     //not work due to PreventExtension

let person = {
    name: "deepanshu",
    age: 18,
    height: "6,2 feet"
}

//defineProperty()
//it is used when we have to specifically make a key immutable(for immutable we use writable:false) and to make the key non-deletable we use (configurable:false)
Object.defineProperty(person, 'name', {writable:false})
person.name = "ashima"     //it doesn't work due to 'define property'
console.log(person);

Object.defineProperty(person, 'name', {configurable:false})
delete person.name
console.log(person);      //it doesn't work due to 'define property'






