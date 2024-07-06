// Leetcode: https://leetcode.com/problems/rearrange-array-elements-by-sign/

// Solution 1
var rearrangeArray = (nums: number[]): number[] => {
    const positives: number[] = nums.filter((num) => num >= 0 && num).reverse();
    const negatives: number[] = nums.filter((num) => num < 0 && num).reverse();

    return nums.reduce((accumulator: number[], num: number, index: number) => {
        index % 2 === 0 ? accumulator.push(positives.pop()!) : accumulator.push(negatives.pop()!);
        return accumulator;
    }, []);
};

// Solution 2
var rearrangeArray = (nums: number[]): number[] => {
    const positives = nums.filter((num) => num >= 0 && num);
    const negatives = nums.filter((num) => num < 0 && num);
    let index1 = 0;
    let index2 = 0;

    return nums.reduce((accumulator: number[], num: number, index: number) => {
        index % 2 === 0 ? accumulator.push(positives[index1++]) : accumulator.push(negatives[index2++]);
        return accumulator;
    }, []);
};
