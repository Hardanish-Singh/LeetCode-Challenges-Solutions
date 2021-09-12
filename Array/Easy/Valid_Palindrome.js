/*
        Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

        Example 1:
                Input: s = "A man, a plan, a canal: Panama"
                Output: true
                Explanation: "amanaplanacanalpanama" is a palindrome.
        
        Example 2:
                Input: s = "race a car"
                Output: false
                Explanation: "raceacar" is not a palindrome.

        Constraints:
                1) 1 <= s.length <= 2 * 105
                2) s consists only of printable ASCII characters.
*/

/*
 * @param { string } str
 * @return { boolean }
*/
 var isPalindrome = function( str ) {
        str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
        //str = str.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
        let leftPointer = 0;
        let rightPointer = str.length - 1;
        while( leftPointer <= rightPointer ) {
                if( str[leftPointer] !== str[rightPointer] ) {
                        return false;
                }
                leftPointer++;
                rightPointer--;
        }
        return true;
};