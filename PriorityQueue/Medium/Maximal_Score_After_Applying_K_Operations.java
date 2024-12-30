// Leetcode: https://leetcode.com/problems/maximal-score-after-applying-k-operations/

class Solution
{
        public long maxKelements(int[] nums, int k)
        {
                PriorityQueue<Integer> pq = new PriorityQueue<Integer>((a, b) -> b - a);

                for(int num: nums)
                {
                        pq.add(num);
                }

                long result = 0;
                while (k > 0)
                {
                        int value = pq.poll();
                        result += value;
                        value = (int)Math.ceil(value/(double)3);
                        pq.add(value);
                        k--;
                }

                return result;
        }
}