class Solution 
{
        public long maxKelements(int[] nums, int k) 
        {
                PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b-a);

                for(int i=0; i<nums.length; i++)
                {
                        pq.add(nums[i]);
                }

                long result = 0;
                while ( k > 0) 
                {
                        int val = pq.poll();
                        result += val;
                        val = (int)Math.ceil(val/(double)3);
                        pq.add(val);
                        k--;
                }

                return result;
        }
}