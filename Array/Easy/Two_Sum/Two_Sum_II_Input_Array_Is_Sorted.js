/*
	Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
	Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
	The tests are generated such that there is exactly one solution. You may not use the same element twice.

	Example 1:
		Input: numbers = [2,7,11,15], target = 9
		Output: [1,2]
		Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
	Example 2:
		Input: numbers = [2,3,4], target = 6
		Output: [1,3]
	Example 3:
		Input: numbers = [-1,0], target = -1
		Output: [1,2]

	Constraints:
		1)  2 <= numbers.length <= 3 * 104
		2) -1000 <= numbers[i] <= 1000
		3) numbers is sorted in non-decreasing order.
		4) -1000 <= target <= 1000
		5) The tests are generated such that there is exactly one solution.
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
                for( let j = i + 1; j < nums.length; j++ ) {
                        if( nums[i] + nums[j] === target ) {
                                return [ i+1, j+1 ];
                        }
			else if( nums[i] + nums[j] > target ) {
				break;
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
		let difference = target - nums[i];
		if( difference in hash_table ) {
			return[ hash_table[ difference ], i+1 ];	
		} else {
			hash_table[ nums[i] ] = i+1;
		}
	}
}

/*
	SOLUTION 3( MOST OPTIMAL )
		Time Complexity: O( nlog(n) )
		Space Complexity: O( 1 )
*/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
*/

var twoSum = function( nums, target ) {
	let leftIndex = 0;
	let rightIndex = nums.length-1;
	while( leftIndex < rightIndex ) {
		if( nums[leftIndex] + nums[rightIndex] < target) {
			leftIndex++;
		}
		else if( nums[leftIndex] + nums[rightIndex] > target) {
			rightIndex--;
		}
		else if( nums[leftIndex] + nums[rightIndex] === target) {
			return [ leftIndex+1, rightIndex+1 ];
		}
	}
}