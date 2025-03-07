// Singleton
// Object.create -->> Constructor method to declare object

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "myKey1",
    age:19,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
