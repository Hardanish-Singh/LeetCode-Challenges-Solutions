/*
 * @param { number[] } nums
 * @return { number[] }
*/

var singleNumber = function(nums) {
        let numbers = {
                
        };
        let isFound = false;
        let result = [];
        for( let i = 0; i < nums.length; i++ ) {
                isFound = false;
                if( numbers[nums[i]] ) {
                   continue;
                }
                for( let j = i + 1; j < nums.length; j++ ){
                        if( nums[i] === nums[j] ) {
                                numbers[nums[i]] = true;
                                isFound = true;
                                break;
                        }
                } 
                if( isFound === false ) {
                        result.push( nums[i] );
                }
        }   
        return result;
};