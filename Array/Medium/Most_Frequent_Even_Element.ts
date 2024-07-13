// Leetcode: https://leetcode.com/problems/most-frequent-even-element/

const mostFrequentEven = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    const map = new Map();
    for (const num of nums) {
        num % 2 === 0 && map.set(num, (map.get(num) || 0) + 1);
    }
    const sortedByValue: number[][] = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    // @ts-ignore
    return sortedByValue.length > 0 ? sortedByValue.at(0).at(0) : -1;
};
