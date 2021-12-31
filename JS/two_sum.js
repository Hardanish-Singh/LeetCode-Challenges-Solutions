/*
      Given an array of integers, return indices of the two numbers such that they add up to a specific target.
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      Example:
	        Given nums = [2, 7, 11, 15], target = 9,
	        Because nums[0] + nums[1] = 2 + 7 = 9,
	        return [0, 1].
*/

// SOLUTION 1
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

// SOLUTION 2
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