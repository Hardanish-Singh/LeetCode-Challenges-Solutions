// Leetcode: https://leetcode.com/problems/find-the-middle-index-in-array/

// Solution 1
var findMiddleIndex = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        // prettier-ignore
        const leftSum = nums
                            .slice(0, i)
                            .reduce((accumulator, currentElement) => accumulator + currentElement, 0);
        // prettier-ignore
        const rightSum = nums
                            .slice(i + 1)
                            .reduce((accumulator, currentElement) => accumulator + currentElement, 0);
        if (leftSum === rightSum) return i;
    }
    return -1;
};

// Solution 2
var findMiddleIndex = (nums: number[]): number =>
    nums.reduce((accumulator, _, currentIndex, nums) => {
        // prettier-ignore
        const leftSum = nums
                            .slice(0, currentIndex)
                            .reduce((accumulator, currentElement) => accumulator + currentElement, 0);
        // prettier-ignore
        const rightSum = nums
                            .slice(currentIndex + 1)
                            .reduce((accumulator, currentElement) => accumulator + currentElement, 0);
        if (leftSum === rightSum) {
            nums.length = 0; // eject early by mutating iterated copy and emptying the array
            return currentIndex;
        }
        return accumulator;
    }, -1);
