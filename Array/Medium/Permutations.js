/*
        Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

        Example 1:
                Input: nums = [1,2,3]
                Output: 
                        [ 
                                [1,2,3],
                                [1,3,2],
                                [2,1,3],
                                [2,3,1],
                                [3,1,2],
                                [3,2,1]
                        ]
        Example 2:
                Input: nums = [0,1]
                Output: 
                        [
                                [0,1],
                                [1,0]
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

var permute = function( nums ) {
        if( nums.length === 0 ) {
                return [];
        }
        let permutations = [];
        let temp = [];
        let temp_permutations = [];
        for( let i=0; i<nums.length; i++ ) {
                temp_permutations.push([nums[i]]);
                temp = [...nums.slice(0,i), ...nums.slice(i+1)];
                
                while( true ) {
                        
                        let is_complete = true;
                        for( let k=0; k<temp_permutations.length; k++ ){
                                if( temp_permutations[k].length !== nums.length ) {
                                        is_complete = false;
                                        break;
                                }
                        }
                        if( is_complete ) {
                                break;
                        }

                        let elementArray = temp_permutations.shift();
                        for( let j=0; j<temp.length; j++ ) {
                                if( ! ( elementArray.includes( temp[j] ) ) ) {
                                        temp_permutations.push( [ ...elementArray, temp[j] ] );
                                }
                        }
                }

                for( let g=0; g<temp_permutations.length; g++ ) {
                        permutations.push(temp_permutations[g]);
                }

        }
        return permutations;
};