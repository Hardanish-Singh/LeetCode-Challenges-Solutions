/*
 * @param { number[] } nums
 * @param { number } val
 * @return { number }
*/

var removeElement = function( nums, val ) {
        for( let i=0; i<nums.length; i++ ) {
                if( nums[i] === val ) {
                        let j;
                        for( j = i+1; j<nums.length; j++ ) {
                                nums[j-1] = nums[j];
                        }
                        nums[nums.length-1] = "_";
                        i--;
                }
        }
        let k = 0;
        for( let i=0; i<nums.length; i++ ){
                if( typeof(nums[i]) === 'number' ) {
                        k++;
                }
        }
        return k;
};