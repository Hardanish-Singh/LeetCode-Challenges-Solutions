// Leetcode: https://leetcode.com/problems/keep-multiplying-found-values-by-two/

const findFinalValue = (nums: Array<number>, original: number): number => {
        let hash_table: {
                [key: number]: boolean;
        } = {};
        for (let i = 0; i < nums.length; i++) {
                if (!hash_table[nums[i]]) {
                        hash_table[nums[i]] = true;
                }
        }
        while (true) {
                if (!hash_table[original]) {
                        return original;
                }
                original *= 2;
        }
};
