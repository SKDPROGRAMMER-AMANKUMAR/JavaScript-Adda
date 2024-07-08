// array

const myArr = [0,  1,  2,  3,  4,  5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[4]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //-->> removed last value from original array

// myArr.unshift(9) //--->> add the entered number in starting of the original array
// myArr.shift() // --->> remove that starting number from original array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(  newArr);
// console.log( typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1  = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);