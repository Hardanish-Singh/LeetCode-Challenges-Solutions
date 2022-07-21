// Leetcode: https://leetcode.com/problems/circular-array-loop/

/*
        You are playing a game involving a circular array of non-zero integers nums. 
        Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i:
                1) If nums[i] is positive, move nums[i] steps forward,
                2) If nums[i] is negative, move nums[i] steps backward.
        Since the array is circular, you may assume that moving forward from the last element puts you on the first element, 
        and moving backwards from the first element puts you on the last element.

        A cycle in the array consists of a sequence of indices seq of length k where:
                1) Following the movement rules above results in the repeating index sequence seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...
                2) Every nums[seq[j]] is either all positive or all negative.
                3) k > 1
        
        Return true if there is a cycle in nums, or false otherwise

        Example 1:
                Input: nums = [2,-1,1,2,2]
                Output: true
                Explanation:
                        There is a cycle from index 0 -> 2 -> 3 -> 0 -> ...
                        The cycle's length is 3.
        
        Example 2:
                Input: nums = [-1,2]
                Output: false
                Explanation:
                        The sequence from index 1 -> 1 -> 1 -> ... is not a cycle because the sequence's length is 1.
                        By definition the sequence's length must be strictly greater than 1 to be a cycle.
*/

// SOLUTION 1

function findNegativeIndex( index, array ) {
        let value = index + array[index];
        while( value < 0 ) {
                value = array.length + value;
        }
        return value;
}

function findPositiveIndex( index, array ) {
        let value = index + array[index];
        while( value >= array.length ) {
                value = value - array.length ;
        }
        return value;
}

var circularArrayLoop = function( array ) {
        for( let i = 0; i < array.length; i++ ) {
                let hash_map = { };
                hash_map[ i ] = array[ i ];
                let index = i;
            
                while( true ) {
                        if( array[ index ] > 0 ) {
                                if( index + array[ index ] > array.length - 1 ) {
                                        index = findPositiveIndex( index, array );
                                } else {
                                        index = index + array[ index ];
                                }
                        }
                        else if( array[ index ] < 0 ) {
                                if( index + array[ index ] < 0 ) {
                                        index = findNegativeIndex( index, array );
                                } else {
                                        index = index + array[ index ];
                                }
                        }
                        
                        if( 
                                ( array[ i ] > 0 && array[ index ] < 0 )
                                        ||
                                ( array[ i ] < 0 && array[ index ] > 0 )
                        ) {
                                break;
                        }
                        
                        if( index in hash_map ) {
                                if( i === index && Object.keys( hash_map ).length > 1 ) {
                                        return true;  
                                }
                                else  {
                                        break;
                                }
                        }

                        hash_map[ index ] = array[ index ];
                }
    
        }
        return false;
};

// SOLUTION 2

var circularArrayLoop = function( array ) {
        for( let i = 0; i < array.length; i++ ) {
                let hash_map = { };
                hash_map[ i ] = array[ i ];
                let index = i;
            
                while( true ) {
                        index = ( index + array[index] ) % array.length;
                        if( index < 0 ) {
                                index = index + array.length;
                        }
                        
                        if( 
                                ( array[ i ] > 0 && array[ index ] < 0 )
                                        ||
                                ( array[ i ] < 0 && array[ index ] > 0 )
                        ) {
                                break;
                        }
                        
                        if( index in hash_map ) {
                                if( i === index && Object.keys( hash_map ).length > 1 ) {
                                        return true;  
                                }
                                else  {
                                        break;
                                }
                        }

                        hash_map[ index ] = array[ index ];
                }
    
        }
        return false;
};