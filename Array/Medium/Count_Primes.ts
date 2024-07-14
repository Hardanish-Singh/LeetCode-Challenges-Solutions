// Leetcode: https://leetcode.com/problems/count-primes/

// Solution 1
var countPrimes = (n: number): number => {
    if (n <= 2) {
        return 0;
    }
    let count: number = 0;
    const isNotPrime = new Array(n).fill(false);
    for (let i: number = 2; i < n; i++) {
        if (isNotPrime[i]) {
            continue;
        } else {
            count++;
            isNotPrime[i] = true;
            for (let j: number = i + i; j <= n; j += i) {
                if (isNotPrime[j] === false) {
                    isNotPrime[j] = true;
                }
            }
        }
    }
    return count;
};

// Solution 2
var countPrimes = (n: number): number => {
    if (n <= 2) {
        return 0;
    }
    let count: number = 0;
    const isNotPrime = new Array(n).fill(false);
    for (let i: number = 2; i < n; i++) {
        if (!isNotPrime[i]) {
            count++;
            isNotPrime[i] = true;
            for (let j: number = i + i; j <= n; j += i) {
                if (isNotPrime[j] === false) {
                    isNotPrime[j] = true;
                }
            }
        }
    }
    return count;
};
