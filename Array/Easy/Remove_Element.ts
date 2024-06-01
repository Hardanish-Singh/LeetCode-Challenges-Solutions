// Leetcode: https://leetcode.com/problems/remove-element/

var removeElement = (nums: number[], val: number): number =>
    nums.reduceRight((accumulator, currentValue, currentIndex, array) => {
        if (currentValue === val) {
            array.splice(currentIndex, 1);
        }
        return accumulator;
    }, nums).length;
