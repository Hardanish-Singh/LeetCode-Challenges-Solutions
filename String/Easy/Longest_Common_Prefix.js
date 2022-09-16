// Leetcode: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param { string[] } strs
 * @return { string }
*/

// SOLUTION 1
var longestCommonPrefix = function( strs ) {
        strs = strs.sort( ( a, b ) => a.length - b.length );
        let word = strs[0];

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
                word = strs[0].slice(0, word.length - 1);
        }

        return "";
};

// SOLUTION 2

/**
 * @param { string[] } strs
 * @return { string }
*/
