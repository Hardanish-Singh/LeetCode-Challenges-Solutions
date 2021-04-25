/****************************************************************
 *           LEETCODE DIVIDE TWO INTEGERS CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Given two integers dividend and divisor, divide two integers *
 * without using multiplication, division, and mod operator.    *
 * Return the quotient after dividing dividend by divisor.      *
 * The integer division should truncate toward zero, which means*
 * losing its fractional part.                                  *
 * For example, truncate(8.345) = 8 and truncate(-2.7335) = -2. *
 *                                                              *
 * Note: Assume we are dealing with an environment that could   *
 * only store integers within the 32-bit signed integer         *
 * range: [−231, 231 − 1]. For this problem, assume that your   *
 * function returns 231 − 1 when the division result overflows. *
 *                                                              *
 * Examples                                                     *
 * Input 1: dividend = 10, divisor = 3                          *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: dividend = 7, divisor = -3                          *
 * Output 2: -2                                                 *
 *                                                              *
 * Input 3: dividend = 0, divisor = 1                           *
 * Output 3: 0                                                  *
 *                                                              *
 * Input 4: dividend = 1, divisor = 1                           *
 * Output 4: 1                                                  *
 *                                                              *
 * Constraints:                                                 *
 * -231 <= dividend, divisor <= 231 - 1                         *
 * divisor != 0                                                 *
 *                                                              *
 * Companies Where this Question Was Asked Before:              *
 * Facebook                                                     *
 * Amazon                                                       *
 * Microsoft                                                    *
 *                                                              *
 * Difficulty Level:                                            *
 * Medium                                                       *
 *                                                              *
 ***************************************************************/
var divide = function( dividend, divisor ) {
        return ( parseInt( dividend / divisor ) > Math.pow( 2, 31 ) - 1 ) ?  Math.pow( 2, 31 ) - 1 : parseInt( dividend / divisor );
};