/*
        Given a string, find the first non-repeating character in it and return its index. If it does not exist, return -1.
        
        Example 1:
                Input: string = "leetcode"
                Output: 0
        Example 2:
                Input: string = "loveleetcode"
                Output: 2
        Example 3:
                Input: string = "aabb"
                Output: -1

        Constraints:
                1) 1 <= s.length <= 10^5
                2) s consists of only lowercase English letters.
*/

/*
 * @param { string } string
 * @return { number }
*/

// SOLUTION 1
var firstUniqChar = function( string ) {
        for( let i = 0; i < string.length; i++ ) {
                let isUnique = true;
                for( let b = 0; b < i; b++ ) {
                        if( string[b] === string[i] ) {
                                isUnique = false;
                                break;
                        }
                }
                if( !isUnique ) {
                        continue;
                }
                for( let j = i + 1; j < string.length; j++ ) {
                        if( string[i] === string[j] ) {
                                isUnique = false;
                                break;
                        }
                } 
                if( isUnique ) {
                        return i;
                }
        }
        return -1;
};

// SOLUTION 2
var firstUniqChar = function( string ) {
        let duplicates = {};
        for( let i = 0; i < string.length; i++ ) {
                let isUnique = true;
                if( string[i] in duplicates ) {
                        continue;
                }
                for( let j = i + 1; j < string.length; j++ ) {
                        if( string[i] === string[j] ) {
                                duplicates[string[i]] = true;
                                isUnique = false;
                                break;
                        }
                } 
                if( isUnique ) {
                        return i;
                }
        }
        return -1;
};