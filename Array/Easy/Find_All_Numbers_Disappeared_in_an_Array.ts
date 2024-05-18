// Leetcode: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Solution 1
var findDisappearedNumbers = (nums: number[]): number[] => {
    const unqiues: Set<number> = new Set(nums);
    return nums.reduce((acc: number[], _, i) => {
        if (!unqiues.has(i + 1)) {
            acc.push(i + 1);
        }
        return acc;
    }, []);
};

// Solution 2
var findDisappearedNumbers = (nums: number[]): number[] => {
    const unqiues: Set<number> = new Set(nums);
    return Array.from({ length: nums.length }, (_, i) => i + 1).filter((num) => !unqiues.has(num));
};
