//basics of Regex
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const isValidEmail = emailRegex.test('test@example.com');
// console.log(isValidEmail); // true

// const testRegex = /world$/
// const test1 = "some things happen in the world"
// console.log(testRegex.test(test1));

// const testRegex = /abc.def/
// const test = "abc1def";
// console.log(testRegex.test(test));
// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 
// .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// function sumOfSquares(n){
//     let sum = 0
//     for (let i = 1; i <= n; i++){
//         sum = i * i; 
//     } 
//     return sum
// }

// function squareOfSum(n){
//     let sum = 0
//     for (let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum * sum
// }
// function calculateDifference(n) {
//     let sumSquares = sumOfSquares(n);
//     let squareSum = squareOfSum(n);
//     return squareSum - sumSquares;
//   }
// let n = 100;
// let difference = calculateDifference(n);
// console.log(`The difference between the square of the sum and the sum of the squares for the first ${n} natural numbers is: ${difference}`);

// function sumOfSquares(n){
//     let sum = 0 
//     for(let i = 1; i <= n; i++){
//         sum = i * i; 
//     }
//     return sum
// }
// function squareOfSum(n){
//     let sum = 0 
//     for (let i = 1; i <= n; i++){
//         sum += i; 
//     }
//     return sum * sum
// }
// function calculateDifference(n){
//     let sumOfSquares = sumOfSquares(n);
//     let squareSum = squareOfSum(n);
//     return squareSum;
// }
// let n = 100;
// let deifference = calculateDifference(n);
// console.log(deifference);


