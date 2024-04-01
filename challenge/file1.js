
function swapTxt(str) {                   // Define the function swapTxt with parameter 'str'

    let newChar = '';                     // The empty string to stores the swapped characters


    str.split('').map(char => {           // Splitting of the input string 'str' for character itteration

        if (char == char.toUpperCase()) {  // Checks if 'char' is uppercase

            newChar += char.toLowerCase(); // If it's uppercase, convert it to lowercase then add it to 'newChar'
        } else {

            newChar += char.toUpperCase();  // If it's lowercase,convert it to uppercase and add it to 'newChar'
        }
    });


    return newChar;     // Return the swapped characters
}

// Call the swapTxt function with the input string 'The Quick Brown Fox' 
console.log(swapTxt('The Quick Brown Fox'));