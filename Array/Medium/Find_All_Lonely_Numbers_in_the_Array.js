/*
        You are given an integer array nums. 
        A number x is lonely when it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.
        Return all lonely numbers in nums. You may return the answer in any order.

        Example 1:
                Input: nums = [10,6,5,8]
                Output: [10,8]
                Explanation: 
                - 10 is a lonely number since it appears exactly once and 9 and 11 does not appear in nums.
                - 8 is a lonely number since it appears exactly once and 7 and 9 does not appear in nums.
                - 5 is not a lonely number since 6 appears in nums and vice versa.
                Hence, the lonely numbers in nums are [10, 8].
                Note that [8, 10] may also be returned.

        Example 2:
                Input: nums = [1,3,5,3]
                Output: [1,5]
                Explanation:
                - 1 is a lonely number since it appears exactly once and 0 and 2 does not appear in nums.
                - 5 is a lonely number since it appears exactly once and 4 and 6 does not appear in nums.
                - 3 is not a lonely number since it appears twice.
                Hence, the lonely numbers in nums are [1, 5].
                Note that [5, 1] may also be returned.

        Constraints:
                1) 1 <= nums.length <= 10^5
                2) 0 <= nums[i] <= 10^6
*/

var findLonely = function( nums ) {
	// VARIABLE DECLARATION
	let lonelyNumbers = [];
	// WE WILL USE HASH TABLE BECAUSE OF FASTER LOOKUPS IN O(1) TIME
	let hash_table = {};
	
        /*
	   LOOP THROUGH ARRAY & CONSTRUCT HASH TABLE
	   WHICH WILL CONTAIN ARRAY NUMBER AS THEIR KEY & VALUES AS THEIR COUNT
	*/
	for( let i=0; i<nums.length; i++ ) {
			if( hash_table[nums[i]] ) {
                                hash_table[nums[i]] += 1;
			}
			else {
                                hash_table[nums[i]] = 1;
			}
	}
    
	/*
		LOOP THROUGH ARRAY AND CHECK FOLLOWING CONDITIONS
			1) IF NUMBER APPREARS EXACTLY ONCE IN THE ARRAY BY CHECKING THEIR COUNT IN HASH TABLE
			2) IF NUMBER HAS NO ADJACENT NUMBERS PRESENT IN THE ARRAY BY CHECKING IN HASH TABLE
	*/
	for( let i=0; i<nums.length; i++ ) {
			if( 
                                ! hash_table[ nums[i] - 1 ] 
                                                && 
                                ! hash_table[ nums[i] + 1 ] 
                                                && 
                                hash_table[nums[i]] == 1 
			  ) {
                                lonelyNumbers.push(nums[i]);
			}
	}

	return lonelyNumbers;
};