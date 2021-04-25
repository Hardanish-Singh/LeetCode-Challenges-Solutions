/****************************************************************
 *                 LEETCODE BINARY SEARCH CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Given an array of integers array and an integer key, write a *
 * function to search key in array. If key exists, then return  *
 * its index. Otherwise, return -1.                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: array = [-1,0,3,5,9,12], key = 9                    *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: array = [-1,0,3,5,9,12], key = 2                    *
 * Output 2: -1                                                 *
 *                                                              *
 * Constraints:                                                 *
 * 1 <= array.length <= 104                                     *
 * -9999 <= array[i], key <= 9999                               *
 * All the integers in array are unique.                        *
 * array is sorted in an ascending order.                       *
 *                                                              *
 * Companies Where this Question Was Asked Before:              *
 * Facebook                                                     *
 * Microsoft                                                    *
 *                                                              *
 * Difficulty Level:                                            *
 * Easy                                                         *
 *                                                              *
 ***************************************************************/

function Binary_Search( array, key ) {

        array.sort( (a, b) => a-b );
        let start = 0;
        let end = array.length-1;

        while( start <= end ) {

                let midpoint = Math.floor( (start + end) / 2 );
                if( key == array[midpoint] ) {
                        return midpoint;
                }
                if( key > array[midpoint] ) {
                        start = midpoint + 1;
                }
                else {
                        end = midpoint - 1;
                }

        }

        return -1;

}