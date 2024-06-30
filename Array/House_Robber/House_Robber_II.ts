// Leetcode: https://leetcode.com/problems/house-robber-ii/

const recurse = (houses: number[], i: number = 0, map: Map<number, number> = new Map<number, number>()): number => {
    if (i >= houses.length) {
        return 0;
    }
    if (map.has(i)) {
        return map.get(i) as number;
    }
    // We have two choices here
    // choice 1: Steal from house[i] but skip stealing from house[i+1]
    const choice1 = houses[i] + recurse(houses, i + 2, map);
    // choice 2: Skip stealing from house[i] and move on to house[i+1]
    const choice2 = recurse(houses, i + 1, map);
    const max = Math.max(choice1, choice2);
    map.set(i, max);
    return max;
};

const rob = (houses: number[]): number => {
    if (houses.length === 1) {
        return houses[0];
    }
    return Math.max(
        recurse(houses.slice(1)), // recurse from houses with index 1 to the end
        recurse(houses.slice(0, houses.length - 1)) // recurse from houses with index 0 to houses.length - 1 (excluding last index)
    );
};
