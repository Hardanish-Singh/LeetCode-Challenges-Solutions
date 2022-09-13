// Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

class Solution {
        public int maxProfit(int[] prices,  int fee) {

                int k = 1;
                int[] buy = new int[k + 1];
                int[] sell = new int[k + 1];
                Arrays.fill(buy, Integer.MAX_VALUE);

                for (int price : prices) {
                        for( int i = 1; i <= k; i++ ) {
                                buy[ i ] = Math.min( buy[ i ], price - sell[i-1] );
                                sell[ i ] = Math.max( sell[ i ], price - buy[ i ] - fee );
                                sell[i-1] = sell[i];
                        }
                }

                return sell[ k ];
        }
}

