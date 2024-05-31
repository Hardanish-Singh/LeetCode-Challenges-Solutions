// Leetcode: https://leetcode.com/problems/pascals-triangle/

// Solution 1
var generate = (numRows: number): number[][] => {
    if (numRows == 1) {
        return [[1]];
    }
    if (numRows == 2) {
        return [[1], [1, 1]];
    }
    const pascalTriangleResult = [[1], [1, 1]]; // Initialize the first two rows
    let prev = pascalTriangleResult[1]; // Keep track of the previous row
    for (let i = 3; i <= numRows; i++) {
        let currentRow = new Array(i).fill(1); // Create a new row with 'i' elements, all initialized to 1
        let index1 = 0;
        let index2 = 1;
        for (let j = 1; j < currentRow.length - 1; j++) {
            currentRow[j] = prev[index1++] + prev[index2++]; // Fill the interior elements of the row with the sum of corresponding elements from the previous row
        }
        prev = currentRow; // Update the previous row
        pascalTriangleResult.push(currentRow); // Add the new row to the pascalTriangleResult
    }
    return pascalTriangleResult;
};

// Solution 2
var generate = (numRows: number): number[][] => {
    const pascalTriangleResult: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        const currentRow: number[] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                currentRow.push(1);
            } else {
                currentRow.push(pascalTriangleResult[i - 1][j - 1] + pascalTriangleResult[i - 1][j]);
            }
        }
        pascalTriangleResult.push(currentRow);
    }
    return pascalTriangleResult;
};
