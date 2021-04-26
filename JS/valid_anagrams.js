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

/*
        This function checks if two dictionaries are Anagrams or not
*/
function isValidAnagram( word1, word2 ) {

        for( key1 in word1 ) {
                let isFound = false;
                for( key2 in word2 ) {
                        if( key1 == key2 && word1[key1] == word2[key2] ) {
                                delete word2[key2];
                                isFound = true;
                                break;
                        }
                }              
                if( isFound == false ) {
                        return false;
                }
        }

        return true;

}

/*
        This function counts each character occurrences in a word, and returns dictionary
*/ 
function countCharacterOccurrences( word ) {
        
        let words = {};
        let count = 1;

        for( let i=0; i<word.length; i++) {
                if(word[i] in words) {
                        continue;
                }
                for( let j=i+1; j<word.length; j++ ) {
                        if( word[i] == word[j] ) {
                                count++;
                        }
                }
                words[word[i]] = count;
                count = 1;
        }

        return words;

}

/*
        Main Function
*/
var isAnagram = function( s, t ) {
    
    if( s.length != t.length ) {
        return false;
    }
    
    let word1 = countCharacterOccurrences( s );
    let word2 = countCharacterOccurrences( t );
    
    return isValidAnagram( word1, word2 ) ? true : false;
};