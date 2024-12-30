// Leetcode: https://leetcode.com/problems/sort-the-students-by-their-kth-score/

class Solution
{
        public int[][] sortTheStudents(int[][] score, int k)
        {
                PriorityQueue<int[]> pq = new PriorityQueue<int[]>( (a,b) -> b[k] - a[k] );

                for(int[] s: score)
                {
                        pq.add(s);
                }

                for(int i = 0; i < score.length; i++)
                {
                    score[i] = pq.poll();
                }

                return score;
        }
}