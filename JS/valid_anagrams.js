/****************************************************************
 *                 LEETCODE VALID ANAGRAM CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Given two strings s & t, return true if t is an anagram of s *
 * and false otherwise.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: s = "anagram", t = "nagaram"                        *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: s = "rat", t = "car"                                *
 * Output 2: false                                              *
 *                                                              *
 * Constraints:                                                 *
 * 1 <= s.length, t.length <= 5 * 104                           *
 * s and t consist of lowercase English letters.                *
 *                                                              *
 * Companies Where this Question Was Asked Before:              *
 * Bloomberg                                                    *
 * Amazon                                                       *
 * Facebook                                                     *
 * Microsoft                                                    *
 * Google                                                       *
 * Goldman Sachs                                                *
 * Apple                                                        *
 * Oracle                                                       *
 * Adobe                                                        *
 * Cisco                                                        *
 * Paypal                                                       *
 * BlackRock                                                    *
 *                                                              *
 * Difficulty Level:                                            *
 * Easy                                                         *
 *                                                              *
 ***************************************************************/

var isAnagram = function( s, t ) {
        if( s.length !== t.length ) {
                return false;
        }
        var dictionaryOne = { };
        var dictionaryTwo = { };

        for( let i = 0; i < s.length; i++ ) {
                dictionaryOne[ s[ i ] ] ? dictionaryOne[ s[ i ] ] += 1 : dictionaryOne[ s[ i ] ] = 1;
                dictionaryTwo[ t[ i ] ] ? dictionaryTwo[ t[ i ] ] += 1 : dictionaryTwo[ t[ i ] ] = 1;
        }

        for( const[ key, value ] of Object.entries( dictionaryOne ) ) {
                if( dictionaryTwo[ key ] !== value ) {
                        return false;
                }
        }

        return true;
};