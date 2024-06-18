// Leetcode: https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/

const findLonely = (nums: number[]): number[] => {
    const map = new Map<number, number>();
    for (let i: number = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    return Array.from(map.entries()).reduce((lonelyNumbers: number[], [key, value]) => {
        if (!map.has(Number(key) + 1) && !map.has(Number(key) - 1) && value === 1) {
            lonelyNumbers.push(Number(key));
        }
        return lonelyNumbers;
    }, []);
};
