// Leetcode: https://leetcode.com/problems/count-subarrays-with-even-odd-ratio-ii/

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var countRatioSubarrays = function (nums, a, b) {
    const n = nums.length;
    const prefix = new Array(n + 1);
    prefix[0] = 0;

    // Give each even number a value of +b
    // and each odd number a value of -a.
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + (nums[i] % 2 === 0 ? b : -a);
    }

    // Coordinate compression for the prefix sums.
    const sorted = [...new Set(prefix.slice().sort((x, y) => x - y))];
    const rank = new Map();

    for (let i = 0; i < sorted.length; i++) {
        rank.set(sorted[i], i + 1);
    }

    // Fenwick tree storing frequencies of previous prefix sums.
    const bit = new Array(sorted.length + 1).fill(0);

    const update = (index) => {
        while (index < bit.length) {
            bit[index]++;
            index += index & -index;
        }
    };

    const query = (index) => {
        let sum = 0;

        while (index > 0) {
            sum += bit[index];
            index -= index & -index;
        }

        return sum;
    };

    let answer = 0;
    let seen = 0;

    for (const value of prefix) {
        const currentRank = rank.get(value);

        // Count previous prefix sums >= current prefix sum.
        const smallerCount = query(currentRank - 1);
        answer += seen - smallerCount;

        update(currentRank);
        seen++;
    }

    return answer;
};
