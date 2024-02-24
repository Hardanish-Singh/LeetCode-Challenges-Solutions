// Leetcode: https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/

const MOD = 10 ** 9 + 7; // 10^9 + 7

const numberOfWays = (
    startPos: number,
    endPos: number,
    k: number,
    map: Map<string, number> = new Map<string, number>()
): number => {
    if (k === 0) {
        return startPos === endPos ? 1 : 0;
    }
    const key = `${startPos},${k}`;
    if (map.has(key)) {
        return map.get(key) as number;
    }
    const moveLeft = numberOfWays(startPos - 1, endPos, k - 1, map);
    const moveRight = numberOfWays(startPos + 1, endPos, k - 1, map);
    map.set(key, (moveLeft + moveRight) % MOD);
    return (moveLeft + moveRight) % MOD;
};
