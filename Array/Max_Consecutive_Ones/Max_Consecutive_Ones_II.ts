// Leetcode: https://leetcode.com/problems/max-consecutive-ones-ii/

const findMaxConsecutiveOnes = (nums: Array<number>): number => {
        var count = 0;
        var maxConsecutiveOnes = 0;
        for (let i = 0; i < nums.length; i++) {
                if (nums[i]) {
                        count++;
                } else {
                        count++;
                        let j = i + 1;
                        while (nums[j++]) {
                                count++;
                        }
                        maxConsecutiveOnes = Math.max(count, maxConsecutiveOnes);
                        count = 0;
                }
        }
        if (count > 0) {
                maxConsecutiveOnes = Math.max(count, maxConsecutiveOnes);
        }
        return maxConsecutiveOnes;
};
