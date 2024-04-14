// Leetcode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/*
    SOLUTION 1: BRUTE FORCE
        Time Complexity: O( n ^ 2 )
        Space Complexity: O( 1 )
*/

var twoSum = (nums: number[], target: number): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i + 1, j + 1];
            } else if (nums[i] + nums[j] > target) {
                break;
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
        let compliment = target - nums[i];
        if (set.has(compliment)) {
            return [nums.indexOf(compliment) + 1, i + 1];
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
        let compliment = target - nums[i];
        if (map.get(compliment)) {
            return [map.get(compliment) as number, i + 1];
        }
        map.set(nums[i], i + 1);
    }
    return [];
};

/*
	SOLUTION 3( MOST OPTIMAL )
		Time Complexity: O( nlogn )
		Space Complexity: O( 1 )
*/

var twoSum = (nums: number[], target: number): number[] => {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
        if (nums[leftIndex] + nums[rightIndex] < target) {
            leftIndex++;
        } else if (nums[leftIndex] + nums[rightIndex] > target) {
            rightIndex--;
        } else if (nums[leftIndex] + nums[rightIndex] === target) {
            return [leftIndex + 1, rightIndex + 1];
        }
    }
    return [];
};
