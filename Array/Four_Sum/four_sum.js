// Leetcode: https://leetcode.com/problems/4sum/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[][] }
*/
 
var fourSum = function( nums, target ) {
        nums.sort( (a, b) => a - b );
        let hash_table = {};

        for( let i = 0; i < nums.length; i++ ) {
                for( let j = i + 1; j < nums.length; j++ ) {
                        let leftPointer = j + 1;
                        let rightPointer = nums.length - 1;

                        while( leftPointer < rightPointer ) {
                                if( nums[i] + nums[j] + nums[leftPointer] + nums[rightPointer] < target ) {
                                        leftPointer++;
                                }
                                else if( nums[i] + nums[j] + nums[leftPointer] + nums[rightPointer] > target ) {
                                        rightPointer--;
                                }
                                else if( nums[i] + nums[j] + nums[leftPointer] + nums[rightPointer] === target ) {
                                        hash_table[ nums[i] + "," + nums[j] + "," + nums[leftPointer] + "," + nums[rightPointer] ] = true;
                                        leftPointer++;
                                        rightPointer--;
                                }
                        }
                }
        }

        let quadruplets = [];
        for( const key of Object.keys( hash_table ) ) {
		quadruplets.push( key.split(",").map( Number ) );     
        }
        return quadruplets;
};