// Leetcode: https://leetcode.com/problems/sort-transformed-array/

class Solution 
{
        public int[] sortTransformedArray(int[] nums, int a, int b, int c) 
        {
                int[] transformedArray = new int[nums.length];
                int index = 0;
                for( int num : nums )
                {
                        transformedArray[index++] = a * (int)Math.pow(num, 2) + b * num + c;
                }
                Arrays.sort(transformedArray);
                return transformedArray;
        }
}
