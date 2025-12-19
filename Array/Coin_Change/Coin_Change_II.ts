// Leetcode: https://leetcode.com/problems/coin-change-ii/

// SOLUTION 1: RECURSION (TLE)
var change = function (amount: number, coins: number[]): number {
    let count: number = 0;
    coins.sort((a, b) => a - b);

    const combinationSum = (sum: number = 0, idx: number = 0): number => {
        if (sum < 0 || sum > amount) {
            return 0;
        }

        if (sum == amount) {
            count = count + 1;
            return count;
        }

        for (let i: number = idx; i < coins.length; i++) {
            combinationSum(sum + coins[i], i);
        }
    };

    combinationSum();
    return count;
};

// SOLUTION 2: RECURSION WITH MEMOIZATION
var change = function (amount: number, coins: number[]): number {
    let cache: {
        [key: string]: number;
    } = {};
    coins.sort((a, b) => a - b);

    const combinationSum = (sum: number = 0, idx: number = 0): number => {
        let count: number = 0;
        if (sum < 0 || sum > amount) {
            return count;
        }

        const key: string = `${sum},${idx}`;
        if (key in cache) {
            count += cache[key];
            return count;
        }

        if (sum === amount) {
            count = count + 1;
            return count;
        }

        for (let i: number = idx; i < coins.length; i++) {
            count += combinationSum(sum + coins[i], i);
        }
        cache[key] = count;
        return count;
    };

    return combinationSum();
};
