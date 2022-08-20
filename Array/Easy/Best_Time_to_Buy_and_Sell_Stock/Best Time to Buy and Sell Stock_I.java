/*
        You are given an array prices where prices[i] is the price of a given stock on the i^th day.
        You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
        Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

        Example 1:
                Input: prices = [7,1,5,3,6,4]
                Output: 5
                Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
                Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
        
        Example 2:
                Input: prices = [7,6,4,3,1]
                Output: 0
                Explanation: In this case, no transactions are done and the max profit = 0.

        Constraints:
                1) 1 <= prices.length <= 10^5
                2) 0 <= prices[i] <= 10^4
*/

class Solution 
{
        public int maxProfit( int[] prices ) 
        {
                int k = 1;
                int[] buy = new int[k + 1];
                int[] sell = new int[k + 1];
                Arrays.fill(buy, Integer.MAX_VALUE);

                for( int price : prices ) 
                {
                        for( int i = 1; i <= k; i++ ) 
                        {
                                buy[ i ] = Math.min( buy[ i ], price - sell[ i - 1 ] );
                                sell[ i ] = Math.max( sell[ i ], price - buy[ i ] );
                        }
                }

                return sell[ k ]; 
        }
}