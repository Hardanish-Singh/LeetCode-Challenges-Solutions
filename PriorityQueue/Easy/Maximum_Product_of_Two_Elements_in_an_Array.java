// Leetcode: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

class Solution
{
        public int maxProduct(int[] nums)
        {
                PriorityQueue<Integer> pq = new PriorityQueue<Integer>((a,b) -> b-a);

                for (int num: nums)
                {
                        pq.add(num);
                }

                int element1 = pq.poll();
                int element2 = pq.poll();

                return (element1 - 1) * (element2 - 1);
        }
}