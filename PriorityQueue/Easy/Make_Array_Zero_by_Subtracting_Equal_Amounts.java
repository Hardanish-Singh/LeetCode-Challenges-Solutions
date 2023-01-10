class Solution 
{
        public int minimumOperations(int[] nums) 
        {
                PriorityQueue<Integer> pq = new PriorityQueue<Integer>();

                for(int i=0; i<nums.length; i++)
                {
                        if( nums[i] != 0 )
                        {
                                pq.add(nums[i]);
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

