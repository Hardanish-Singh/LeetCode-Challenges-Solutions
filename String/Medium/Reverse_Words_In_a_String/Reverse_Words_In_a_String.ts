/*
        Given an input string s, reverse the order of the words.
        A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
        Return a string of the words in reverse order concatenated by a single space.
        Note that s may contain leading or trailing spaces or multiple spaces between two words. 
        The returned string should only have a single space separating the words. Do not include any extra spaces.

        Example 1:
                Input: s = "the sky is blue"
                Output: "blue is sky the"
        Example 2:
                Input: s = "  hello world  "
                Output: "world hello"
                Explanation: Your reversed string should not contain leading or trailing spaces.
        Example 3:
                Input: s = "a good   example"
                Output: "example good a"
                Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
        Example 4:
                Input: s = "  Bob    Loves  Alice   "
                Output: "Alice Loves Bob"
        Example 5:
                Input: s = "Alice does not even like bob"
                Output: "bob like even not does Alice"

        Constraints:
                1) 1 <= s.length <= 10^4
                2) s contains English letters (upper-case and lower-case), digits, and spaces ' '.
                3) There is at least one word in s.
*/

/*
 * @param { string } s
 * @return { string }
*/

function reverseWords( str:string ):string {
        let split_at_space:string[] = str.split(" ");
        let reverse_word:string = "";
        for( let i:number = split_at_space.length-1; i>=0; i-- ) {
                if( split_at_space[i] != "" ) {
                        reverse_word += split_at_space[i] + " ";
                }
        }
        return reverse_word.trim();
        // return reverse_word.slice( 0,reverse_word.length - 1 );
};