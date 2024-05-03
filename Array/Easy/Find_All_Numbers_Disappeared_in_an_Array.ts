// Leetcode: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = (nums: number[]): number[] => {
    let uniques = new Set(nums);
    let result: number[] = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!uniques.has(i)) {
            result.push(i);
        }
    }
    return result;
};
