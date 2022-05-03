/*
        Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

        A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

        Example 1:
                Input: digits = "23"
                Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
        Example 2:
                Input: digits = ""
                Output: []
        Example 3:
                Input: digits = "2"
                Output: ["a", "b", "c"]
        Constraints:
                1) 0 <= digits.length <= 4
                2) digits[i] is a digit in the range ['2', '9'].
*/

const phoneNumberLetterCombinations = {
        '0' : '0',
        '1' : '1',
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
};
   
/**
 * @param { string } digits
 * @return { string[] }
*/

var letterCombinations = function( digits ) {
        if( digits.length < 1 ) {
                return [];
        }
        else {
                let letterCombinationsOfPhoneNumber = [];
                for( let i = 0; i < digits.length; i++ ) {
                        letterCombinationsOfPhoneNumber = makeLetterCombinations( letterCombinationsOfPhoneNumber, phoneNumberLetterCombinations[ digits[ i ] ] );
                }
                return letterCombinationsOfPhoneNumber;
        }
};

/**
 * @param { string[] } value1
 * @param { string[] } value2
 * @return { string[] }
*/
function makeLetterCombinations( value1, value2 ) {
        let temp = [];
        if(value1.length === 0) {
                return value2.split('');
        }
        else {
                for( let i=0; i<value1.length; i++ ) {
                        for( let j=0; j<value2.length; j++ ) {
                                temp.push( value1[i] + value2[j] );
                        }
                }
        }
        return temp;
}