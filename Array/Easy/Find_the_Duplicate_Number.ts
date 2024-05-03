// Leetcode: https://leetcode.com/problems/find-the-duplicate-number/

const findDuplicate = (nums: number[]): number => {
    const map = new Map<number, number>();
    for (const num of nums) {
        if (map.has(num)) {
            return num;
        }
        map.set(num, 1);
    }
    return -1;
};
