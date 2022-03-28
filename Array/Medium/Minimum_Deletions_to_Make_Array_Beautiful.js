/*
 * @param {number[]} nums
 * @return {number}
*/


var minDeletion = function( nums ) {
        var count = 0;
        
        for( let i = 0; i < nums.length ; i++ ) {
                if( i % 2 === 0 && nums[i] === nums[i + 1] ) {
                        //nums.splice( i, 1 );
                        nums.shift();
                        i--;
                        count++;
                }
        }
        return nums.length % 2 !== 0 ? count + 1 : count;
//         if( nums.length % 2 !== 0 ) {
//                 //nums.splice( nums.length - 1, 1 );
//                 nums.unshift();
//                 count++;
//         }
        
//         return count;
};