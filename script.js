const xlsx = require('xlsx');

// Function to calculate the average of an array of numbers
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

// Read the Excel file
const workbook = xlsx.readFile('grades.xlsx');
const sheetName = workbook.SheetNames[0]; // Get the first sheet
const worksheet = workbook.Sheets[sheetName];

// Convert the worksheet to JSON
const data = xlsx.utils.sheet_to_json(worksheet);


// Extract grades
const grades = data.map(row => parseFloat(row['grade']));
console.log(grades)

const average = calculateAverage(grades);

console.log(`The average grade is: ${average}`);
