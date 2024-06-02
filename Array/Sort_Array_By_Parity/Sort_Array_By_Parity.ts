// Leetcode: https://leetcode.com/problems/sort-array-by-parity/

var sortArrayByParity = (nums: number[]): number[] =>
    nums.reduce((acc: number[], num: number) => {
        if (num % 2 === 0) {
            acc.unshift(num);
        } else {
            acc.push(num);
        }
        return acc;
    }, []);
