const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// --------- Concat method of combinig array-------
// const allHeros  = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// -------- Spread operator method of combining array-----
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]
const real_Another_array = another_array.flat(Infinity)
console.log(real_Another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //--->> it'll make an array of Hitesh
console.log(Array.from({name:"hitesh"})) //--->> it'll make an array of Hitesh

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //--->> it'll also make an array 
