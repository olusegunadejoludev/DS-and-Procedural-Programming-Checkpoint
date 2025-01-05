//PROCEDURE dot product

// Procedure to calculate dot product of two vectors
function dot_product(v1, v2, ps) {
  if (v1.length !== v2.length) {
      console.error("Vectors must have the same length.");
      return;
  }

  let result = 0;
  for (let i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
  }

  // Store the result in the provided variable ps
  ps[0] = result;
}

// Example usage:
const vector1 = [1, 2, 3];
const vector2 = [4, 5, 6];
const resultArray = [0]; // Array to store the result
dot_product(vector1, vector2, resultArray);
console.log("Dot product:", resultArray[0]);


//Algorithm to check orthogonality

// Algorithm to determine if two vectors are orthogonal
function areVectorsOrthogonal(v1, v2) {
  const resultArray = [0];
  dot_product(v1, v2, resultArray);

  // Check if the dot product is zero
  return resultArray[0] === 0;
}

// Example usage for n pairs of vectors
const vectorPairs = [
  { v1: [1, 2, 3], v2: [4, 5, 6] },
  { v1: [1, 0, 0], v2: [0, 1, 0] },
  // Add more vector pairs as needed
];

vectorPairs.forEach(pair => {
  const isOrthogonal = areVectorsOrthogonal(pair.v1, pair.v2);
  console.log(`Vectors [${pair.v1}] and [${pair.v2}] are orthogonal: ${isOrthogonal}`);
});


//Algorithm using 'dot product' Function

// Algorithm using dot_product function to determine orthogonality
function areVectorsOrthogonalUsingFunction(v1, v2) {
  const dotProductResult = [0];
  dot_product(v1, v2, dotProductResult);

  // Check if the dot product is zero
  return dotProductResult[0] === 0;
}

// Example usage for n pairs of vectors
const vectorPairsUsingFunction = [
  { v1: [1, 2, 3], v2: [4, 5, 6] },
  { v1: [1, 0, 0], v2: [0, 1, 0] },
  // Add more vector pairs as needed
];

vectorPairsUsingFunction.forEach(pair => {
  const isOrthogonal = areVectorsOrthogonalUsingFunction(pair.v1, pair.v2);
  console.log(`Vectors [${pair.v1}] and [${pair.v2}] are orthogonal: ${isOrthogonal}`);
});


