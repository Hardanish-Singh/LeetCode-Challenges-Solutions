// Leetcode: https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

const isStrictlyIncreasing = (sequence: number[]): boolean =>
    sequence.reduce((accumulator, _, currentIndex, array) => {
        if (sequence[currentIndex] >= sequence[currentIndex + 1]) {
            array.length = 0; // eject early by mutating the iterated array
            return false;
        }
        return accumulator;
    }, true);

// Solution 1
var canBeIncreasing = (sequence: number[]): boolean =>
    sequence.reduce((accumulator, _, i, array) => {
        let clonedArray = [...sequence];
        clonedArray.splice(i, 1); // remove the current index element from the array
        if (isStrictlyIncreasing(clonedArray)) {
            array.length = 0; // eject early by mutating the iterated array
            return true;
        }
        return accumulator;
    }, false);

// Solution 2
var canBeIncreasing = (sequence: number[]): boolean => {
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i - 1] >= sequence[i]) {
            // let copy1 = nums.slice(0, i-1).concat(nums.slice(i));
            // let copy2 = nums.slice(0, i).concat(nums.slice(i+1));
            let copy1 = [...sequence.slice(0, i - 1), ...sequence.slice(i)];
            let copy2 = [...sequence.slice(0, i), ...sequence.slice(i + 1)];
            return isStrictlyIncreasing(copy1) || isStrictlyIncreasing(copy2);
        }
    }
    return true;
};
