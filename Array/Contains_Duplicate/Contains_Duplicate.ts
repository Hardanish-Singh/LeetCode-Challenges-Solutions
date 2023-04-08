// Leetcode: https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums: Array<number>): boolean => {
        let countOccurrences: {
                [key: number]: boolean;
        } = {};
        for (const num of nums) {
                if (num in countOccurrences) {
                        return true;
                }
                countOccurrences[num] = true;
        }
        return false;
};
