// Immediately Invoked Function Expressions (IIFE)

(function Chai() {
    //named IIFE (chai is the name here )
    console.log(`DB CONNECTED`);
})(); //-->> tHIS SEMICOLON is for ending this executed function

((name) => {
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

// ()()
// () first paranthesis stand for defination of function while second () stand for execution of function
