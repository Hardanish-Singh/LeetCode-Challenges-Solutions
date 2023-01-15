// Leetcode: https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/

class Solution 
{
    public int largestInteger(int num) 
    {

        PriorityQueue<Integer> oddQueue = new PriorityQueue<>((a,b) -> b - a);
        PriorityQueue<Integer> evenQueue = new PriorityQueue<>((a,b) -> b - a);

        String s = Integer.toString(num);

        for(int i = 0; i < s.length(); i++)
        {
            int n = Character.getNumericValue( s.charAt(i) );
            if(n % 2 == 0)
            {
                evenQueue.add(n);
            }
            else
            {
                oddQueue.add(n);
            }
        }
        
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < s.length(); i++)
        {
            int n = Character.getNumericValue( s.charAt(i) );
            if(n % 2 == 0)
            {
                sb.append(evenQueue.poll());
            }
            else
            {
                sb.append(oddQueue.poll());
            }
        }

        return new Integer(sb.toString());
    }
}