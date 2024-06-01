// Leetcode: https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

const isStrictlyIncreasing = (sequence: number[]): boolean =>
    sequence.reduce((accumulator, _, currentIndex, array) => {
        if (sequence[currentIndex] >= sequence[currentIndex + 1]) {
            array.length = 0; // eject early by mutating the iterated array
            return false;
        }
        return accumulator;
    }, true);

const canBeIncreasing = (sequence: number[]): boolean =>
    sequence.reduce((accumulator, _, i, array) => {
        let clonedArray = [...sequence];
        clonedArray.splice(i, 1); // remove the current index element from the array
        if (isStrictlyIncreasing(clonedArray)) {
            array.length = 0; // eject early by mutating the iterated array
            return true;
        }
        return accumulator;
    }, false);
