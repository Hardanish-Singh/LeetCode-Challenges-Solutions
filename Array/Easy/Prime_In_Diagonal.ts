// Leetcode: https://leetcode.com/problems/prime-in-diagonal/

const isPrime = (num: number): boolean => {
    if (num < 2) return false;

    if (num % 2 == 0) return num == 2;

    let root = Math.sqrt(num);

    for (let i = 3; i <= root; ++i) if (num % i == 0) return false;

    return true;
};

const diagonalPrime = (nums: number[][]): number => {
    let primes: number[] = [];

    for (let i = 0; i < nums.length; ++i) {
        let diagonal1 = nums[i][i];
        let diagonal2 = nums[i][nums.length - 1 - i];

        if (isPrime(diagonal1)) primes.push(diagonal1);
        if (isPrime(diagonal2)) primes.push(diagonal2);
    }

    return primes.length ? Math.max.apply(null, primes) : 0;
};
