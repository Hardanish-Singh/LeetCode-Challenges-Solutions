// Leetcode: https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

class Solution
{
        public int minimumOperations(int[] nums)
        {
                PriorityQueue<Integer> pq = new PriorityQueue<Integer>();

                for (int num: nums)
                {
                        if(num != 0)
                        {
                                pq.add(num);
                        }
                }

                int minOperations = 0;
                int sum = 0;

                while (!pq.isEmpty())
                {
                        int minElement = pq.poll();
                        int top = minElement - sum;
                        if(top != 0)
                        {
                                sum += top;
                                minOperations++;
                        }
                }

                return minOperations;
        }
}

