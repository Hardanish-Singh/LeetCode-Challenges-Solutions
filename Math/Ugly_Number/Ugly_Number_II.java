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
                int index = 0;

                while( true )
                {
                        long top = uglyNumbers.get(index++);
                        count++;
                        if(count == n) {
                                return (int)top;
                        }
                        if(top * 2 < Integer.MAX_VALUE && !visited.contains(top * 2)){
                                visited.add(top * 2);
                                uglyNumbers.add(top * 2);
                        }
                        if(top * 3 < Integer.MAX_VALUE && !visited.contains(top * 3)){
                                visited.add(top * 3);
                                uglyNumbers.add(top * 3);
                        }
                        if(top * 5 < Integer.MAX_VALUE && !visited.contains(top * 5)){
                                visited.add(top * 5);
                                uglyNumbers.add(top * 5);
                        }
                        Collections.sort(uglyNumbers);
                }
        }
}