// Leetcode: https://leetcode.com/problems/longest-common-prefix/

/**
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