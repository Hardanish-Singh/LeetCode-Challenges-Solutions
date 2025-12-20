// Leetcode: https://leetcode.com/problems/arranging-coins/

class Solution {
    public:
        int arrangeCoins( int n, int k = 1 ) {
            if( n < k ) {
                return k - 1;
            }
            return arrangeCoins( n - k, k + 1 );
        }
};