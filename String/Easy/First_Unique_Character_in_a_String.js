/*
 * @param {string} s
 * @return {number}
*/

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