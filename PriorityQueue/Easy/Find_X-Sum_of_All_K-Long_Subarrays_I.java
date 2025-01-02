// Leetcode: https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i

class Solution
{
        public int[] findXSum(int[] nums, int k, int x)
        {
                int n = nums.length;
                int[] result = new int[n - k + 1];
                for (int i = 0; i < n - k + 1; i++)
                {
                        HashMap<Integer, Integer> map = new HashMap<>();
                        for (int j = i; j < i + k; j++)
                        {
                                map.put(nums[j], map.getOrDefault(nums[j], 0) + 1);
                        }

                        PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> {
                            // If the values is not same, then sort by value in descending order
                            if (a.getValue() != b.getValue())
                            {
                                return b.getValue() - a.getValue();
                            }
                            // Else sort by key in descending order if values are same
                            else
                            {
                                return b.getKey() - a.getKey();
                            }
                        });
                        // pq.addAll(map.entrySet());
                        for(Map.Entry<Integer, Integer> entry: map.entrySet())
                        {
                                pq.add(entry);
                        }

                        int sum = 0;
                        for (int j = 0; j < x && !pq.isEmpty(); j++)
                        {
                                Map.Entry<Integer, Integer> e = pq.poll();
                                sum += e.getKey() * e.getValue();
                        }
                        result[i] = sum;
                }
                return result;
        }
}