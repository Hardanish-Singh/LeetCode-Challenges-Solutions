// Leetcode: https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/

// Solution 1
const maxScoreIndices = (nums) => {
    let map = new Map();

    for (let i = 0; i <= nums.length; i++) {
        let left = nums.slice(0, i).filter((n) => n === 0).length;
        let right = nums.slice(i).filter((n) => n === 1).length;

        const sum = left + right;
        if (map.has(sum)) {
            let temp = map.get(sum);
            temp.push(i);
            map.set(sum, temp);
        } else {
            map.set(sum, [i]);
        }
    }

    const max = Math.max.apply(null, Array.from(map.keys()));
    return map.get(max);
};
