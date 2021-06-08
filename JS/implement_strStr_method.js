/**
 * @param { string } haystack
 * @param { string } needle
 * @return { number }
*/
var strStr = function( haystack, needle ) {
        if( needle === "" || needle === haystack) {
                return 0;
        }
        let subStr = "";
        let subStrLength = 0;
        let i = 0;
        let j = 0;
        for( i; i<haystack.length; i++ ) {
                subStrLength++;
                subStr += haystack[i];
                if( subStrLength === needle.length ) {
                        if( subStr === needle ) {
                                return (i-needle.length+1);
                        }
                        subStrLength = 0;
                        subStr = "";
                        i = j;
                        j++;
                }
        }
        return -1;
};