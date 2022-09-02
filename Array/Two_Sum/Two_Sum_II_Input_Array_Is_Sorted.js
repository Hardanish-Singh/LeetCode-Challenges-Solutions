// Leetcode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

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
                                return [ i + 1, j + 1 ];
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
			return[ hash_table[ difference ], i + 1 ];	
		} else {
			hash_table[ nums[i] ] = i+1;
		}
	}
}

/*
	SOLUTION 3( MOST OPTIMAL )
		Time Complexity: O( nlogn )
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
			return [ leftIndex + 1, rightIndex + 1 ];
		}
	}
}