// Leetcode: https://leetcode.com/problems/number-of-good-pairs/

import java.util.Arrays;

class Solution
{
        public int numIdenticalPairs(int[] nums)
        {
                Arrays.sort(nums);
                int goodPairs = 0;
                for( int i = 0; i < nums.length; i++ ) 
                {
                        for(int j = i+1; j < nums.length; j++)
                        {
                                if( nums[i] == nums[j] ) 
                                {
                                        goodPairs++;
                                }
                        }
                }
                return goodPairs;
        }
}