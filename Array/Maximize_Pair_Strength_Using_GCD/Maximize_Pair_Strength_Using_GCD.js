// Leetcode: https://leetcode.com/problems/maximize-pair-strength-using-gcd/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxPairStrength = function (nums) {
    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    let maxStrength = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const common = gcd(nums[i], nums[j]);

            // Equivalent to: (nums[i] * nums[j]) / (common * common)
            const strength = (nums[i] / common) * (nums[j] / common);

            maxStrength = Math.max(maxStrength, strength);
        }
    }

    return maxStrength;
};
