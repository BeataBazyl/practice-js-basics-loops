const x = 10;
let iteration = 0;
let randomNumber = -1;

// let i = 1;
// while(i<=5) {
//     result= result + i;
//     i++;
// }
// console.log(result);

while( randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    iteration = iteration + 1;
    console.log(randomNumber, iteration)
}
console.log(iteration);
