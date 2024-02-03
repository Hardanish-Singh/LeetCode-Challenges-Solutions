// Leetcode: https://leetcode.com/problems/two-sum/

/*
        SOLUTION 1: BRUTE FORCE
                Time Complexity: O( n ^ 2 )
                Space Complexity: O( n )
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
        let difference = target - nums[i];
        if (set.has(difference)) {
            return [nums.indexOf(difference), i];
        }
        set.add(nums[i]);
    }
    return [];
};

/*
        SOLUTION 2: USING MAP
                Time Complexity: O( n )
                Space Complexity: O( n )
*/

var twoSum = (nums: number[], target: number): number[] => {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (map.has(difference)) {
            return [map.get(difference) as number, i];
        }
        map.set(nums[i], i);
    }
    return [];
};
