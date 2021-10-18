/*
 * @param {number[]} nums
 * @return {number}
*/

// SOLUTION 1
var findMaxConsecutiveOnes = function( nums ) {
        let count = 0;
        let max = 0;
        nums.push(0);
        for( let i=0; i<nums.length; i++ ){
                if( nums[i] === 1 ) {
                        count++;
                }
                else {
                        max = Math.max(count,max);
                        count = 0;
                }
        }
        return max;
};

// SOLUTION 2
var findMaxConsecutiveOnes = function( nums ) {
        let count = 0;
        let max = 0;
        for( let i=0; i<nums.length; i++ ){
                if( nums[i] === 1 ) {
                        count++;
                }
                else {
                        max = Math.max(count,max);
                        count = 0;
                }
                if( i === nums.length-1 && nums[i] === 1 ) {
                        max = Math.max(count,max);
                }
        }
        return max;
};

// SOLUTION 3
var findMaxConsecutiveOnes = function( nums ) {
        let count = 0;
        let max = 0;
        for( let i=0; i<nums.length; i++ ){
                if( nums[i] === 1 ) {
                        count++;
                }
                else {
                        max = Math.max(count,max);
                        count = 0;
                }
        }
        return Math.max(count,max);
};