/*
 * @param { number[] } nums
 * @return { number[] }
*/

var rearrangeArray = function( nums ) {
        let positives = [];
        let negatives = [];
        let result = [];
        let index1 = 0;
        let index2 = 0;
        for( let i = 0; i < nums.length; i++ ) {
                nums[i] >= 0 ? positives.push( nums[i] ) : negatives.push( nums[i] );
        }
        for( let i = 0; i < nums.length; i++ ) {
                i % 2 === 0 ? result.push( positives[index1++] ) : result.push( negatives[index2++] ) ;
        }
        return result;
};