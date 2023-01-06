// Leetcode: https://leetcode.com/problems/ugly-number/

class Solution {
        public boolean isUgly(int n) {
                if(n < 1) {
                        return false;
                }
                int[] primeFactors = new int[] {2, 3, 5};
                for (int factor : primeFactors) {
                        while (n % factor == 0) {
                                n /= factor;
                        }
                }
                return n == 1;
        }
}