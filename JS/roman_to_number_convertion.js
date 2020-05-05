/*
    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

                        Symbol       Value
                        I             1
                        V             5
                        X             10
                        L             50
                        C             100
                        D             500
                        M             1000
    For example: Two is written as II in Roman numeral, just two one's added together. 
                 Twelve is written as, XII, which is simply X + II. 
                 Twenty Seven is written as XXVII, which is XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. 
    However, the numeral for four is not IIII. Instead, the number four is written as IV. 
    Because the one is before the five we subtract it making four. 
    The same principle applies to the number nine, which is written as IX. 
    There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
    
    Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

    Example 1:
    Input: "III"
    Output: 3

    Example 2:
    Input: "IV"
    Output: 4
    
    Example 3:
    Input: "IX"
    Output: 9
    
    Example 4:
    Input: "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
    
    Example 5:
    Input: "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


    HINT TO SOLVE: So for a case like XXIX, we loop through from beginning to the end. 
                   When next number is smaller or equal to current number, sum them. 
                   When next number is larger than current number, sum them and minus twice of current number. 
                   
                   The answer for XXIX is 10 + 10 + 1 + 10–2 * 1 = 29. 
                   
                   Or we could loop from the end to forward. When previous number is smaller than current number, minus previous number. 
                   Otherwise, add them together. We have 10–1 + 10 + 10 = 29.
*/

var romanToInt = function (string) {
  let romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (string.length === 1) return romanNumerals[string];

  let romansum = 0;

  for (let i = 0; i < string.length; i++) {
    if (i !== string.length - 1) {
      if (romanNumerals[string[i]] >= romanNumerals[string[i + 1]])
        romansum += romanNumerals[string[i]];
      else {
        romansum +=
          romanNumerals[string[i]] +
          romanNumerals[string[i + 1]] -
          2 * romanNumerals[string[i]];
        i++;
      }
    } else if (
      i === string.length - 1 &&
      romanNumerals[string[i]] <= romanNumerals[string[i - 1]]
    )
      romansum += romanNumerals[string[i]];
  }

  return romansum;
};
