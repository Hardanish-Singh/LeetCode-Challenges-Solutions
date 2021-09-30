/*
        Implement pow(x, n), which calculates x raised to the power n (i.e x^n).

        Example 1:
                Input: x = 2.00000, n = 10
                Output: 1024.00000
        Example 2:
                Input: x = 2.10000, n = 3
                Output: 9.26100
        Example 3:
                Input: x = 2.00000, n = -2
                Output: 0.25000
        Explanation: 2-2 = 1/22 = 1/4 = 0.25
        
        Constraints:
                1) -100.0 < x < 100.0
                2) -231 <= n <= 231-1
                3) -104 <= xn <= 104
*/

/*
 * @param { number } x
 * @param { number } n
 * @return { number }
*/

/*
        SOLUTION 1
                BRUTE FORCE
                        Time Complexity: O(n)
                        Space Complexity: O(1)
*/
var myPow = function(x, n) {
        let power = 1;
        for( let i=1; i<=Math.abs( n ); i++ ) {
                power *= x;
        }
        return n < 0 ? 1/power : power;
};

/*
        SOLUTION 2
                FAST  POWER ALGORITHM
                        Time Complexity: O(log n)
                        Space Complexity: O(log n)
*/
var myPow = function(x, n) {
        let power = 1;
        let product = x;
        for( let i = Math.abs( n ); i>0; i = parseInt( i/2 ) ) {
                if( i%2 !== 0 ) {
                        power = power * product;
                }
                product = product * product;
        }
        return n < 0 ? 1/power : power;
};