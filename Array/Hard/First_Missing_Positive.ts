// Leetcode: https://leetcode.com/problems/first-missing-positive/

const firstMissingPositive = (nums: Array<number>): number => {
    const set = new Set();

    // Create a set with non-duplicates
    nums.forEach((num) => set.add(num));

    let i = 1;
    while (true) {
        if (!set.has(i)) {
            return i;
        }
        i++;
    }
};
