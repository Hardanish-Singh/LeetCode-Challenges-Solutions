// Leetcode: https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums: number[], k: number): number[] => {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const sortedByValue = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    return sortedByValue.slice(0, k).map((entry) => entry[0]);
};
