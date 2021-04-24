/*
        Given two strings s and t, return true if t is an anagram of s, and false otherwise.

        Example 1:
                Input: s = "anagram", t = "nagaram"
                Output: true
        Example 2:
                Input: s = "rat", t = "car"
                Output: false
        
        Constraints:
                1) 1 <= s.length, t.length <= 5 * 104
                2) s and t consist of lowercase English letters.
        
        Companies Where this Question Was Asked Before:
                1) Bloomberg
                2) Amazon
                3) Facebook
                4) Microsoft
                5) Google
                6) Goldman Sachs
                7) Apple
                8) Oracle
                9) Adobe
                10) Cisco
                11) Paypal
                12) BlackRock
        
        Difficulty Level: 
                Easy
*/

/*
        This function checks if two dictionaries are Anagrams or not
*/
function Check_Anagram(word1, word2) {
        for(key1 in word1) {
                let isFound = false;
                for(key2 in word2) {
                        if(key1 == key2 && word1[key1] == word2[key2]) {
                                delete word2[key2];
                                isFound = true;
                                break;
                        }
                }
                if(isFound == false) return false;
        }
        return true;
}
/*
        This function counts character occurrences in a word, and returns dictionary
*/ 
function countCharacterOccurrences(word) {
        
        let words = {};
        let count = 1;

        for( let i=0; i<word.length; i++) {
                if(word[i] in words) continue;
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
var isAnagram = function(s, t) {
    
    if( s.length != t.length ) return false;
    
    let word1 = countCharacterOccurrences(s);
    let word2 = countCharacterOccurrences(t);
    
    return Check_Anagram(word1, word2) ? true : false;
};