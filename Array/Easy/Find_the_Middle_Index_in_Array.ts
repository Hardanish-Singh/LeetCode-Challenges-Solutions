// Leetcode: https://leetcode.com/problems/find-the-middle-index-in-array/

// Solution 1
var findMiddleIndex = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        let left = nums.slice(0, i);
        let right = nums.slice(i + 1);
        const leftSum = left.reduce((accumulator, current) => accumulator + current, 0);
        const rightSum = right.reduce((accumulator, current) => accumulator + current, 0);
        if (leftSum == rightSum) return i;
    }
    return -1;
};

// Solution 2
var findMiddleIndex = (nums: number[]): number =>
    nums.reduce((accumulator, _, index, nums) => {
        const leftSum = nums.slice(0, index).reduce((accumulator, current) => accumulator + current, 0);
        const rightSum = nums.slice(index + 1).reduce((accumulator, current) => accumulator + current, 0);
        if (leftSum == rightSum) {
            nums.length = 0; // eject early by mutating iterated copy and emptying the
            return index;
        }
        return accumulator;
    }, -1);
