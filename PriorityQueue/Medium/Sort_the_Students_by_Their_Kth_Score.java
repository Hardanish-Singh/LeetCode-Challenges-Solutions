// Leetcode: https://leetcode.com/problems/sort-the-students-by-their-kth-score/

class Solution
{
        public int[][] sortTheStudents(int[][] score, int k)
        {
                PriorityQueue<int[]> pq=new PriorityQueue<int[]>( (a,b) -> b[k] - a[k] );

                for(int[] i:score)
                {
                        pq.add(i);
                }

                int i = 0;
                while(!pq.isEmpty())
                {
                        score[i++] = pq.remove();
                }

                return score;
        }
}