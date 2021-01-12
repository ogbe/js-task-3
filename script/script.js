/* Write a function that takes one parameter (a whole number/integer) and checks if numbers from
* 1 to the given parameter (inclusive) are divisible by 1, 3, 5while replacing the appropriate
* words as specified below:
* Numbers divisible by 2 are replaced by "yu"
* Numbers divisible by 3 are replaced by "gi"
* Numbers divisible by 5 are replaced by "oh"
* Numbers are unchanged if not divisible by any of the above.

* If a number is divisible by more than one of the above,replace and join the words representing
* their divisors, separating by hyphen (-).
* NB: "divisible" in this case means no remainder after division.

* Return an array containing all numbers from 1 to the passed argument (inclusive) where all
* divisible numbwers have been replaced as specified above.

* Call the function and pass 100 as an argument.
* Call the function and pass a random number of your choice. */

const checkNum = (num) => {
    // create the array
    const arr = [];
    // create the the for loop
    for(let i = 0; i < num; i++) {
        // create the conditional statements
        if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr.push("yu-gi-oh");
        }
        else if(i % 2 === 0 && i % 3 === 0) {
            arr.push("yu-gi");
        } 
        else if(i % 2 === 0 & i % 5 === 0) {
            arr.push("yu-oh");
        }
        else if(i % 3 === 0 && i % 5 === 0) {
            arr.push("gi-oh");
        }
        else if(i % 2 === 0) {
            arr.push("yu");
        }
        else if(i % 3 === 0) {
            arr.push("gi");
        }
        else if(i % 5 === 0) {
            arr.push("oh");
        }
        else (arr.push(i))
    }
    return arr;
}

console.log(checkNum(100));
console.log(checkNum(20));