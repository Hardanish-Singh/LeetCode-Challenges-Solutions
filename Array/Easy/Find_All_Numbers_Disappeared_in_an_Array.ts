// Leetcode: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Solution 1
var findDisappearedNumbers = (nums: number[]): number[] => {
    const uniqueNumbers: Set<number> = new Set(nums);
    return nums.reduce((accumulator: number[], _, i) => {
        if (!uniqueNumbers.has(i + 1)) {
            accumulator.push(i + 1);
        }
        return accumulator;
    }, []);
};

// Solution 2
var findDisappearedNumbers = (nums: number[]): number[] => {
    const uniqueNumbers: Set<number> = new Set(nums);
    return Array.from({ length: nums.length }, (_, i) => i + 1).filter((num) => !uniqueNumbers.has(num));
};
