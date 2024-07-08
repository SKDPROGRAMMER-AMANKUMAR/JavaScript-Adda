// const tinderUser = new Object()  --- singleton object
const tinderUser = {} // --->> Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
       userfullname:{
         firstname: "hitesh",
         lastname:"Choudhary"
       }
    }
}

// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4  = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3} // -->> spread operator to combine all the individual object 
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // -- it'll return all the keys of object in array form 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


// refer "MDN object javascript" for further methods
