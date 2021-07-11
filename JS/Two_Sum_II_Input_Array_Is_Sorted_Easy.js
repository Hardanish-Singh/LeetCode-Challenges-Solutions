/*
	Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

	Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

	The tests are generated such that there is exactly one solution. You may not use the same element twice.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function( nums, target )
{
        for( let i=0; i<nums.length; i++ )
        {
                for( let j=i+1; j<nums.length; j++ )
                {
                        if( nums[i] + nums[j] === target )
                        {
                                return [ i+1, j+1 ];
                        }
                }
        }
};
