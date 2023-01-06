class Solution {
        public boolean isUgly(int n) {
                if(n < 1) {
                        return false;
                }
                int[] prime = {2, 3, 5};
                for (int factor : prime) {
                        while (n % factor == 0) {
                        n /= factor;
                        }
                }
                return n == 1;
        }
}