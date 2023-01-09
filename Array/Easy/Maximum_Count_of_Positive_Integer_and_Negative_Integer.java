class Solution 
{
        public int maximumCount(int[] nums) 
        {
                int max = 0;
                int min = 0;
                for( int num : nums )
                {
                        if( num < 0 )
                        {
                                min++;
                        }
                        else if( num > 0 )
                        {
                                max++;
                        }
                }
                return Math.max(min, max);
        }
}