// Leetcode: https://leetcode.com/problems/single-number/

// Solution 1 (using XOR operator)
/*
    In this case, the callback function uses the bitwise XOR (^) operator to combine the accumulator value (a) and the current value (b). 
    The XOR (^) returns true if the two operands are different, and false if they are the same.
    By applying the XOR operator to each element of the array, the function effectively cancels out all the duplicate numbers and leaves only the single number in the array.
*/
const singleNumber = (nums: number[]): number => nums.reduce((a, b) => a ^ b, 0);
