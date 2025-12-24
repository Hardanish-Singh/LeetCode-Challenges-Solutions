// Leetcode: https://leetcode.com/problems/house-robber/
// Solution 1: Recursion (TLE)
const rob1 = (houses: number[], i: number = 0): number => {
    if (i >= houses.length) {
        return 0;
    }
    // We have two choices here
    // choice 1: Steal from house[i] but skip stealing from house[i+1]
    const choice1 = houses[i] + rob1(houses, i + 2);
    // choice 2: Skip stealing from house[i] and move on to house[i+1]
    const choice2 = rob1(houses, i + 1);
    return Math.max(choice1, choice2);
};

// Solution 2: Recursion with Memoization / Caching
const rob2 = (houses: number[], i: number = 0, map: Map<number, number> = new Map<number, number>()): number => {
    if (i >= houses.length) {
        return 0;
    }
    if (map.has(i)) {
        return map.get(i) as number;
    }
    // We have two choices here
    // choice 1: Steal from house[i] but skip stealing from house[i+1]
    const choice1 = houses[i] + rob2(houses, i + 2, map);
    // choice 2: Skip stealing from house[i] and move on to house[i+1]
    const choice2 = rob2(houses, i + 1, map);
    const max = Math.max(choice1, choice2);
    map.set(i, max);
    return max;
};
