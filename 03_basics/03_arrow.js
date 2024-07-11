const user = {
    username: "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// --->> This keyword will only work with "Object"  and in some case with function and not with Arrow function 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {         // --->> this is arrow function 
    let username = "hitesh"
    console.log(this);
}

// chai()
// const addTwo = (num1, num2) => {  //--->> A basic arrow function holding in a variable 
//     return num1+ num2
// }

// -->> Below IS THE implicit arrow function 
 
// const addTwo = (num1, num2) =>  num1+ num2

// const addTwo = (num1, num2) =>  (num1+ num2)

const addTwo = (num1, num2) =>  ({username: "hitesh"})

// when you write "return " then you've to use Curly braces , if not then u have to use "()"

console.log(addTwo(2,4))

const myArray = [2,5,3,5]

// myArray.forEach()
