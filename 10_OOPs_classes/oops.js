const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from database');
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User('hitesh', 12, true)
const userTwO = new User('ChaiaurCode', 11, false)
console.log(userOne.constructor);
// console.log(userTwO);

// properties and work  of "new" keyword ----->>

// 1. when you use "new" keyword , so firstly it'll  create an Empty Object called instance
// 2. Constructor function call because of "new" keyword, so what it(constructor) does , it takes all the arguments and pack it then give that packed argument 
// 3. All the arguments injected in "this" keyword
// 4. You'll get all the arguments in function via "this"