// Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
class Solution {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length <= 1) {
             return 0;
         }
        int k = 1;
        int[] buy = new int[k + 1];
        int[] sell = new int[k + 1];
        Arrays.fill(buy, Integer.MAX_VALUE);
        
        int i = 1;
        int cooldown = sell[ i - 1 ];
            
        // int cooldown = 0;
            
        for (int price : prices) {
                for( i = 1; i <= k; i++ ) {
                        buy[ i ] = Math.min( buy[ i ], price - cooldown );
                        cooldown = sell[i];
                        sell[ i ] = Math.max( sell[ i ], price - buy[ i ] );
                }
        }
        
        return sell[ k ];
    }
}

