/*
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.

        Example 1:
                Input: nums = [2,7,11,15], target = 9
                Output: [0,1]
                Output: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:
                Input: nums = [3,2,4], target = 6
                Output: [1,2]
        Example 3:
                Input: nums = [3,3], target = 6
                Output: [0,1]
        
        Constraints:
                1) 2 <= nums.length <= 10^4
                2) -10^9 <= nums[i] <= 10^9
                3) -10^9 <= target <= 10^9
                4) Only one valid answer exists.
*/

/*
        SOLUTION 1: BRUTE FORCE
                Time Complexity: O( n ^ 2 )
                Space Complexity: O( n )
*/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
*/

var twoSum = function( nums, target ) {
        for( let i = 0; i < nums.length; i++ ) {
                for( let j = i+1; j < nums.length; j++ ) {
                        if( nums[i] + nums[j] === target ) {
                                return [ i, j ];
                        }
                }
        }
};

/*
        SOLUTION 2: USING HASH TABLE
                Time Complexity: O( n )
                Space Complexity: O( n )
*/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
*/

var twoSum = function( nums, target ) {
        let hash_table = { }
	for( let i = 0; i < nums.length; i++ ) {
		let diff = target - nums[i];
		if( !( diff in hash_table ) ) {
                        hash_table[ nums[i] ] = i;
		}
		else {
			return[ hash_table[ diff ], i ];
		}
	}
}