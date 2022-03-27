/*
 * @param { number[] } nums
 * @return { number[] }
*/

var sortArrayByParity = function( nums ) {
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[i] % 2 !== 0 ) {    
                        for( let j = i + 1; j < nums.length; j++ ) {
                                if( nums[j] % 2 === 0 ) {
                                        [ nums[j], nums[i] ] = [ nums[i], nums[j] ];
                                        break;
                                }
                        }
                }
        }
        return nums;
};