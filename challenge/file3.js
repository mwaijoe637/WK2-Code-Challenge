
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    // Define the array containing numbers

function itsPrime(val) {                          // Define the function to check if a number is prime

    for (let i = 2; val > i; i++) {               // Loop through numbers from 2 to val - 1

        if (val % i === 0) {                      // If val is divisible by any number other than 1 and itself

            return false;                         // It's not prime

        }
    }
    return val > 1;                               // If number is less or equal to 1, return false; otherwise, return true
}


console.log(array.filter(itsPrime));              // Filters the array to bring prime numbers