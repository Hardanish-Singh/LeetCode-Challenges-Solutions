// Leetcode: https://leetcode.com/problems/contains-duplicate/

type CountOccurrences = {
    [key: number]: boolean;
};

const containsDuplicate = (nums: Array<number>): boolean => {
    let countOccurrences: CountOccurrences = {};
    for (const num of nums) {
        if (num in countOccurrences) {
            return true;
        }
        countOccurrences[num] = true;
    }
    return false;
};
