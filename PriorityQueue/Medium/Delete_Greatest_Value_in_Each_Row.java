// Leetcode: https://leetcode.com/problems/delete-greatest-value-in-each-row/

class Solution {
    public int deleteGreatestValue(int[][] grid) {
        int result = 0;
        int row = grid.length;
        int col = grid[0].length;
        PriorityQueue<Integer>[] pq = new PriorityQueue[row];

        for (int i = 0; i < row; i++) {
            pq[i] = new PriorityQueue<>((a, b) -> b - a);
            for (int j = 0; j < col; j++) {
                pq[i].add(grid[i][j]);
            }
        }

        for (int i = 0; i < col; i++) {
            int max = 0;
            for (int j = 0; j < row; j++) {
                max = Math.max(max, pq[j].poll());
            }
            result += max;
        }

        return result;
    }
}