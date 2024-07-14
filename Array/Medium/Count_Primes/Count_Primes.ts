// Leetcode: https://leetcode.com/problems/count-primes/

const countPrimes = (n: number): number => {
    if (n <= 2) {
        return 0;
    }
    let count: number = 0;
    const isNotPrime = new Array(n).fill(true);
    for (let i: number = 2; i < n; i++) {
        if (isNotPrime[i]) {
            continue;
        } else {
            count++;
            isNotPrime[i] = true;
            for (let j: number = i + i; j <= n; j = j + i) {
                if (isNotPrime[j] === false) {
                    isNotPrime[j] = true;
                }
            }
        }
    }
    return count;
};
