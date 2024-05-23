const fs = require('fs');

// Function to count words in a string
function countWords(text) {
    // Split the text by spaces to get an array of words
    const words = text.trim().split(' ');
    // Return the length of the array
    return words.length;
}

// Read the content of the file
fs.readFile('yourfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    // Count the number of words in the file
    const wordCount = countWords(data);
    
    // Print the word count
    console.log(`The file contains ${wordCount} words.`);
});
