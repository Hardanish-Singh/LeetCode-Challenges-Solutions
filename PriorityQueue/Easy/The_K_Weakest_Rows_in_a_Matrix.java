// Leetcode: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

class Solution
{
        public int[] kWeakestRows(int[][] mat, int k)
        {
                HashMap<Integer, Integer> map= new HashMap<Integer, Integer>();
                for(int i=0; i<mat.length; i++)
                {
                        int count=0;
                        for(int j=0; j<mat[0].length; j++)
                        {
                                if(mat[i][j] == 1)
                                {
                                        count++;
                                }
                        }
                        map.put(i, count);
                }

                PriorityQueue<Map.Entry<Integer, Integer>> pq= new PriorityQueue<>((a,b) -> {
                        // If the values are same, then sort by key in ascending order
                        if(a.getValue() == b.getValue())
                        {
                                return a.getKey() - b.getKey();
                        }
                        // Else sort by value in ascending order
                        else 
                        {
                                return a.getValue() - b.getValue();
                        }
                });
                // pq.addAll(map.entrySet());
                for(Map.Entry<Integer, Integer> key: map.entrySet())
                {
                        pq.add(key);
                }

                int[] result = new int[k];
                for(int i=0; i<k; i++) {
                    result[i] = pq.poll().getKey();
                }
                return result;
        }
}
