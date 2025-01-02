// Leetcode: https://leetcode.com/problems/take-gifts-from-the-richest-pile

class Solution {
    public long pickGifts(int[] gifts, int k) {
        PriorityQueue<Integer> pq= new PriorityQueue<>((a,b)->b-a);
        for(int i: gifts) pq.add(i);
        for(int i=0;i<k;i++){
            int gift=pq.poll();
            int left=(int)Math.floor(Math.sqrt(gift));
            pq.add(left);
        }
        long sum=0;
        while(!pq.isEmpty()) sum+=pq.poll();
        return sum;
    }
}