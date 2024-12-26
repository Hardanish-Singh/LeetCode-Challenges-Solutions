// Leetcode: https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/

class Solution
{
        public int largestInteger(int num)
        {
                PriorityQueue<Integer> oddQueue = new PriorityQueue<Integer>((a,b) -> b - a);
                PriorityQueue<Integer> evenQueue = new PriorityQueue<Integer>((a,b) -> b - a);
                String s = Integer.toString(num);

                for (char c : s.toCharArray())
                {
                        int n = Character.getNumericValue(c);
                        (n % 2 == 0 ? evenQueue : oddQueue).add(n);
                }

                StringBuilder sb = new StringBuilder();
                for (char c : s.toCharArray())
                {
                        int n = Character.getNumericValue(c);
                        sb.append(n % 2 == 0 ? evenQueue.poll() : oddQueue.poll());
                }

                return Integer.parseInt(sb.toString());
        }
}