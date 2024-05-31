// Leetcode: https://leetcode.com/problems/prime-in-diagonal/

const isPrime = (num: number): boolean => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const primeInDiagonal = (nums: number[][]): number => {
    let total = 0;
    for (let row = 0; row < nums.length; row++) {
        for (let column = 0; column < nums[row].length; column++) {
            if (row === column || row + column === nums.length - 1) {
                if (isPrime(nums[row][column])) {
                    total += nums[row][column];
                }
            }
        }
    }
    return total;
};
