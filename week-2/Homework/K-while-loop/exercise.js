/* Write a function that:
- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop
*/

function sumTillNum(num) {
    if (num < 0) {
        throw Error("pass in a positive number!")
    }

    let i = num
    let sumResult = 0
    while (i > 0) {
        sumResult = sumResult + i;
        i = i - 1;
    } 
    return sumResult;
}

let n = 10;

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));

if (sumTillNum(n) === (n * (n+1) / 2)) {
    console.log("COOL")
}