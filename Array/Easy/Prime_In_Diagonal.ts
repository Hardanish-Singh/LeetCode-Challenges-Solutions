// Leetcode: https://leetcode.com/problems/prime-in-diagonal/

const isPrime = (num) => {
    if (num < 2) return false;

    if (num % 2 == 0) return num == 2;
    let root = Math.sqrt(num);

    for (let i = 3; i <= root; ++i) {
        if (num % i == 0) return false;
    }

    return true;
};

var diagonalPrime = function (nums: number[][]): number {
    let primes: number[] = [];

    for (let i = 0; i < nums.length; ++i) {
        let diag1 = nums[i][i];
        let diag2 = nums[i][nums.length - 1 - i];

        if (isPrime(diag1)) primes.push(diag1);
        if (isPrime(diag2)) primes.push(diag2);
    }

    return primes.length ? Math.max.apply(null, primes) : 0;
};
