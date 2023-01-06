// Leetcode: https://leetcode.com/problems/ugly-number-ii/

import java.util.Collections;

class Solution 
{
        public int nthUglyNumber(int n) 
        {
                HashSet<Long> visited = new HashSet<Long>();
                ArrayList<Long> uglyNumbers = new ArrayList<Long>();
                uglyNumbers.add(1L);
                int count = 0;
                int[] primeFactors = new int[] {2, 3, 5};

                while( true )
                {
                        long top = uglyNumbers.get(0);
                        uglyNumbers.remove(0);
                        count++;
                        if(count == n) {
                                return (int)top;
                        }
                        for (int factor : primeFactors) {
                                if( top * factor < Integer.MAX_VALUE && !visited.contains(top * factor) ) {
                                        visited.add(top * factor);
                                        uglyNumbers.add(top * factor);
                                }
                        }
                        Collections.sort(uglyNumbers);
                }
        }
}