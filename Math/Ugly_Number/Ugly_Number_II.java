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
                        long number = uglyNumbers.get(0);
                        uglyNumbers.remove(0);
                        count++;
                        if(count == n) {
                                return (int)number;
                        }
                        for (int factor : primeFactors) {
                                long uglyNumber = number * factor;
                                if( uglyNumber < Integer.MAX_VALUE && !visited.contains(uglyNumber) ) {
                                        visited.add(uglyNumber);
                                        uglyNumbers.add(uglyNumber);
                                }
                        }
                        Collections.sort(uglyNumbers);
                }
        }
}