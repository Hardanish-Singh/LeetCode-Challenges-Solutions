// Leetcode: https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/

// Solution 1 (TLE)
var maxScoreIndices = (nums) => {
    const map = new Map();

    for (let i = 0; i <= nums.length; i++) {
        let left = nums.slice(0, i).filter((n) => n === 0).length;
        let right = nums.slice(i).filter((n) => n === 1).length;

        const sum = left + right;
        if (map.has(sum)) {
            const indices = map.get(sum);
            indices.push(i);
            map.set(sum, indices);
        } else {
            map.set(sum, [i]);
        }
    }

    const max = Math.max.apply(null, Array.from(map.keys()));
    return map.get(max);
};

// Solution 2 (Optimized)
var maxScoreIndices = (nums) => {
    const map = new Map();
    let ones = nums.filter((n) => n === 1).length;
    let zeros = 0;

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i - 1] === 0) {
            zeros++;
        } else {
            ones--;
        }
        const sum = ones + zeros;
        if (map.has(sum)) {
            const indices = map.get(sum);
            indices.push(i);
            map.set(sum, indices);
        } else {
            map.set(sum, [i]);
        }
    }

    const max = Math.max.apply(null, Array.from(map.keys()));
    return map.get(max);
};

// Solution 3 (Optimized)
var maxScoreIndices = (nums) => {
    const map = new Map();
    let ones = nums.filter((n) => n === 1).length;
    let zeros = 0;

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i - 1] === 0) {
            zeros++;
        } else {
            ones--;
        }
        const sum = ones + zeros;
        if (map.has(sum)) {
            map.set(sum, [...map.get(sum), i]);
        } else {
            map.set(sum, [i]);
        }
    }

    const max = Math.max.apply(null, Array.from(map.keys()));
    return map.get(max);
};
