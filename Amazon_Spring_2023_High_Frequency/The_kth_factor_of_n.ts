// Leetcode: https://leetcode.com/problems/the-kth-factor-of-n/description/

// Solution 1
var kthFactor = (n: number, k: number): number => [...Array(n + 1).keys()].filter((i) => n % i === 0)[k - 1] ?? -1;

// Solution 2
var kthFactor = (n: number, k: number): number =>
    Array.from({ length: n + 1 }, (_, i) => i).filter((i) => n % i === 0)[k - 1] ?? -1;

// Solution 3
var kthFactor = (n: number, k: number): number => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
        if (count === k) {
            return i;
        }
    }
    return -1;
};
