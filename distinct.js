//PROBLEM 1

function findSumOfDistinctElements(arrA, arrB) {
  // Initialize sum to 0
let sum = 0;

  // Compare each element of arrA with arrB
arrA.forEach(element => {
    if (!arrB.includes(element)) {
        sum += element;
    }
});

  // Compare each element of arrB with arrA (vice versa)
arrB.forEach(element => {
    if (!arrA.includes(element)) {
        sum += element;
    }
});

  // Output the result
return sum;
}

// Example usage:
const arrA = [2, 4, 6, 8, 9];
const arrB = [4, 8, 12];
const result = findSumOfDistinctElements(arrA, arrB);
console.log("Sum of distinct elements from both arrays is:", result);
