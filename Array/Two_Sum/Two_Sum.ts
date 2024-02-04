// Leetcode: https://leetcode.com/problems/two-sum/

/*
        SOLUTION 1: BRUTE FORCE
                Time Complexity: O( n ^ 2 )
                Space Complexity: O( 1 )
*/

var twoSum = (nums: number[], target: number): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

/*
        SOLUTION 2: USING SETS
                Time Complexity: O( n )
                Space Complexity: O( n )
*/

var twoSum = (nums: number[], target: number): number[] => {
    const set = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (set.has(complement)) {
            return [nums.indexOf(complement), i];
        }
        set.add(nums[i]);
    }
    return [];
};

/*
        SOLUTION 3: USING MAP
                Time Complexity: O( n )
                Space Complexity: O( n )
*/

var twoSum = (nums: number[], target: number): number[] => {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement) as number, i];
        }
        map.set(nums[i], i);
    }
    return [];
};
