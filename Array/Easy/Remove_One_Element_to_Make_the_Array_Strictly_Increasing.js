// Leetcode: https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

const isStrictlyIncreasing = (sequence) =>
    sequence.reduce((accumulator, currentValue, currentIndex, array) => {
        if (sequence[currentIndex] >= sequence[currentIndex + 1]) {
            array.length = 0; // eject early by mutating the iterated array
            return false;
        }
        return accumulator;
    }, true);

const canBeIncreasing = (sequence) =>
    sequence.reduce((accumulator, currentValue, i, array) => {
        let answer = [...sequence];
        answer.splice(i, 1).map(Number);
        if (isStrictlyIncreasing(answer)) {
            return true;
        }
        return accumulator;
    }, false);
