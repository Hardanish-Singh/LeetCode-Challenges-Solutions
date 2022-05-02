/*
        Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

        Example 1:
                Input: nums = [1, 2, 3]
                Output: 
                        [ 
                                [1, 2, 3],
                                [1, 3, 2],
                                [2, 1, 3],
                                [2, 3, 1],
                                [3, 1, 2],
                                [3, 2, 1]
                        ]
        Example 2:
                Input: nums = [0,1]
                Output: 
                        [
                                [0, 1],
                                [1, 0]
                        ]
        Example 3:
                Input: nums = [1]
                Output: 
                        [
                                [1]
                        ]

        Constraints:
                1) 1 <= nums.length <= 6
                2) -10 <= nums[i] <= 10
                3) All the integers of nums are unique.
*/

/*
 * @param {number[]} nums
 * @return {number[][]}
*/

function is_complete( array1, array2 ) {
        let is_complete = true;
        for( let k=0; k<array1.length; k++ ) {
                if( array1[k].length !== array2.length ) {
                        is_complete = false;
                        break;
                }
        }
        if( is_complete ) {
                return false;
        }
        return true;
}

var permute = function( nums ) {
        if( nums.length === 0 ) {
                return [];
        }
        if( nums.length === 1 ) {
                return [nums];
        }
        let permutations = [];
        let temp = [];
        let temp_permutations = [];
        for( let i=0; i<nums.length; i++ ) {
                temp_permutations.push([nums[i]]);
                temp = [...nums.slice(0,i), ...nums.slice(i+1)];
                while( is_complete( temp_permutations, nums ) ) {
                        let elementArray = temp_permutations.shift();
                        for( let j=0; j<temp.length; j++ ) {
                                if( ! ( elementArray.includes( temp[j] ) ) ) {
                                        let t = [ ...elementArray, temp[j] ];
                                        if( t.length === nums.length ){
                                                permutations.push( t );
                                        }
                                        temp_permutations.push( [ ...elementArray, temp[j] ] );
                                }
                        }
                }
                temp_permutations = [];
        }
        return permutations;
};