class Solution {
    public int[][] sortTheStudents(int[][] score, int k) {
        PriorityQueue<int[]> pq=new PriorityQueue<>( (a,b) -> b[k] - a[k] );
        
        for(int[] i:score) {
            pq.add(i);
        }

        for(int i=0;i<score.length;i++) {
            score[i] = pq.remove();
        }
        return score;
    }
}