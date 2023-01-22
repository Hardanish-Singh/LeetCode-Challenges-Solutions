// Leetcode: https://leetcode.com/problems/find-k-closest-elements/description/

class Solution 
{
        public List<Integer> findClosestElements(int[] arr, int k, int x) 
        {
                PriorityQueue<Integer> pq = new PriorityQueue<Integer>((Integer a , Integer b) -> {
                        if(Math.abs(a - x) == Math.abs(b - x)) {
                                return b - a;
                        }
                        return Math.abs(b - x) - Math.abs(a - x);
                });

                for(int i: arr)
                {
                        pq.add(i);
                        if(pq.size() > k)
                        {
                                pq.remove();
                        }
                }

                List<Integer> ans = new ArrayList<>();
                while (pq.size() > 0)
                {
                        ans.add(pq.remove());
                }
                Collections.sort(ans);
                return ans;
        }
}