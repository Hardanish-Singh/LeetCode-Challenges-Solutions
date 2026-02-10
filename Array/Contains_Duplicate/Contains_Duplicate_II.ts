// Leetcode: https://leetcode.com/problems/contains-duplicate-ii/

type CountOccurrences = {
    [key: number]: number;
};

// SOLUTION 1: BRUTE FORCE
var containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    for (let i: number = 0; i < nums.length - 1; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
};

// SOLUTION 2: HASH TABLE
var containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    let countOccurrences: CountOccurrences = {};
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] in countOccurrences && Math.abs(i - countOccurrences[nums[i]]) <= k) {
            return true;
        } else {
            countOccurrences[nums[i]] = i;
        }
    }
    return false;
};
