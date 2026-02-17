// Leetcode: https://leetcode.com/problems/last-stone-weight/

const lastStoneWeight = (stones: number[]): number => {
    if (stones.length === 0) {
        return 0;
    }
    while (stones.length !== 1) {
        stones.sort((a, b) => b - a);
        let x = stones.shift();
        let y = stones.shift();
        let diff = x !== y ? x - y : 0;
        stones.push(diff);
    }
    return stones[0];
};
