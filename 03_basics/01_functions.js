function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName --->> reference of function
// sayMyName() //----->> calling of function 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("Hitesh");
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a usename ");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Hitesh"))
console.log(loginUserMessage())


// ++++ Function with Object and Array in JavaScript ++++++++

function calculateCartPrice(...num1){   //-->> Rest Operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyOBJECT){
    console.log(`Username is ${anyOBJECT.username} and price is ${anyOBJECT.price}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
     return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

