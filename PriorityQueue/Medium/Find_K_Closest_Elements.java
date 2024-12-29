// Leetcode: https://leetcode.com/problems/find-k-closest-elements/description/

class Solution
{
        public List<Integer> findClosestElements(int[] arr, int k, int x)
        {
                PriorityQueue<Integer> pq = new PriorityQueue<Integer>( (Integer a , Integer b) -> {
                        if( Math.abs(a - x) < Math.abs(b - x) || ( ( Math.abs(a - x) == Math.abs(b - x) ) && a < b ) )
                        {
                                return -1;
                        }
                        else
                        {
                                return 1;
                        }
                });
                
                for(int i = 0; i < arr.length; i++)
                {
                        pq.add(arr[i]);
                }
                
                ArrayList<Integer> result = new ArrayList<Integer>();
                for(int i = 0; i < k; i++)
                {
                        result.add(pq.poll());
                }

                // Sorting the result array in ascending order
                Collections.sort(result);
                // Collections.sort(result, (a, b) -> a - b);

                // Uncomment the following line to sort the result array in descending order
                // Collections.sort(result, (a, b) -> b - a);

                return result;
        }
}