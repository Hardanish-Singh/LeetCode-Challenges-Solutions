class Solution 
{
        public int maxProduct(int[] nums) 
        {
                PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b-a);

                for(int i=0; i<nums.length; i++)
                {
                        pq.add(nums[i]);
                }

                int val1 = pq.poll();
                int val2 = pq.poll();

                return (val1 - 1) * (val2 - 1);
        }
}