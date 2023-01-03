// Leetcode: https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/

var findLonely = function (nums) {
        let lonelyNumbers = [];
        let hash_table = {};

        for (let i = 0; i < nums.length; i++) {
                hash_table[nums[i]] ? (hash_table[nums[i]] += 1) : (hash_table[nums[i]] = 1);
        }

        /*
		LOOP THROUGH ARRAY AND CHECK FOLLOWING CONDITIONS
			1) IF NUMBER HAS NO ADJACENT NUMBERS PRESENT IN THE ARRAY BY CHECKING IN HASH TABLE
                        2) IF NUMBER APPREARS EXACTLY ONCE IN THE ARRAY BY CHECKING THEIR COUNT IN HASH TABLE
	*/
        for (let i = 0; i < nums.length; i++) {
                if (!hash_table[nums[i] - 1] && !hash_table[nums[i] + 1] && hash_table[nums[i]] == 1) {
                        lonelyNumbers.push(nums[i]);
                }
        }

        return lonelyNumbers;
};
