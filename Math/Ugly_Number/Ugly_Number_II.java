import java.util.Collections;

class Solution 
{
        public int nthUglyNumber(int n) 
        {
                HashSet<Integer> visited = new HashSet<Integer>();
                ArrayList<Integer> uglyNumbers = new ArrayList<Integer>();
                uglyNumbers.add(1);
                int count = 0;
                int index = 0;

                while( true )
                {
                        int top = uglyNumbers.get(index++);
                        count++;
                        if(count == n) {
                                return top;
                        }
                        if((long)top * 2 < Integer.MAX_VALUE && !visited.contains(top * 2)){
                                visited.add(top * 2);
                                uglyNumbers.add(top * 2);
                        }
                        if((long)top * 3 < Integer.MAX_VALUE && !visited.contains(top * 3)){
                                visited.add(top * 3);
                                uglyNumbers.add(top * 3);
                        }
                        if((long)top * 5 < Integer.MAX_VALUE && !visited.contains(top * 5)){
                                visited.add(top * 5);
                                uglyNumbers.add(top * 5);
                        }
                        Collections.sort(uglyNumbers);
                }
        }
}