// Leetcode: https://leetcode.com/problems/alternating-digit-sum/

class Solution 
{
        public int alternateDigitSum(int n)
        {
                int sum = 0;
                String num = Integer.toString( n );
                for( int i = 0; i < num.length(); i++ ) 
                {
                        if( i % 2 == 0 ) 
                        {
                                sum += Character.getNumericValue( num.charAt(i) );
                        } else 
                        {
                                sum -= Character.getNumericValue( num.charAt(i) );
                        }
                }
                return sum;
        }
}