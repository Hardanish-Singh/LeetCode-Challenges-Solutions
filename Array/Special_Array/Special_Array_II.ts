// Leetcode: https://leetcode.com/problems/special-array-ii/

// Solution 1
var isArraySpecial = (nums: number[], queries: number[][]): boolean[] => {
    const result: boolean[] = [];
    const helper = (nums: number[]): boolean => nums.every((num, i) => i === 0 || num % 2 !== nums[i - 1] % 2);
    for (const query of queries) {
        const arr: number[] = nums.slice(query[0], query[1] + 1);
        result.push(helper(arr));
    }
    return result;
};

// Solution 2a
var isArraySpecial = (nums: number[], queries: number[][]): boolean[] => {
    const prefixSum = [0];
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] % 2 !== nums[i - 1] % 2) {
            prefixSum.push(prefixSum[prefixSum.length - 1]);
        } else {
            prefixSum.push(prefixSum[prefixSum.length - 1] + 1);
        }
    }
    return queries.map(([from, to]) => prefixSum[from] === prefixSum[to]);
};
