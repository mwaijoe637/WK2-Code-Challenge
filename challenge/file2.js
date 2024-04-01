
function inBetween(start, end) {         // Define function to generate an array of numbers between start and end 

    var myArray = [];                   // Create an empty array to store the generated numbers


    for (var i = start; i <= end; i += 1) {   // Loop through each number from start to end

        myArray.push(i);               // Add the current number to the array

    }

    return myArray;                    // Returns the array with the numbers range 

}

// Test case:
console.log(inBetween(4, 7));
console.log(inBetween(-4, 7)); 