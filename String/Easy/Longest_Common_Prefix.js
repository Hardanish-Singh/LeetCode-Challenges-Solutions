/*
        Write a function to find the longest common prefix string amongst an array of strings.
        If there is no common prefix, return an empty string "".

        Example 1:
                Input: strs = ["flower", "flow", "flight"]
                Output: "fl"
        
        Example 2:
                Input: strs = ["dog", "racecar", "car"]
                Output: ""
                Explanation: There is no common prefix among the input strings.

        Constraints:
                1) 1 <= strs.length <= 200
                2) 0 <= strs[i].length <= 200
                3) strs[i] consists of only lower-case English letters.
*/

/*
 * @param { string[] } strs
 * @return { string }
*/

var longestCommonPrefix = function( strs ) {
        strs = strs.sort( ( a, b ) => a.length - b.length );
        var index =  0;
        var word = strs[0];
        while( word.length !== 0 ) {
                let isLongestPrefix = true;
                for( let i = 1; i < strs.length; i++ ) {
                        if( !strs[i].startsWith(word) ) {
                                isLongestPrefix = false;
                                break;
                        }
                }
                if( isLongestPrefix ) {
                        return word;
                }
                word = strs[0].slice(0, strs.length - index++);
        }
        return "";
};