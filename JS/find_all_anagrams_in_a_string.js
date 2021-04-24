/*

        Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

        Example 1:

        Input: s = "cbaebabacd", p = "abc"
        Output: [0,6]
        
        Explanation:
        The substring with start index = 0 is "cba", which is an anagram of "abc".
        The substring with start index = 6 is "bac", which is an anagram of "abc".
        
        Example 2:

        Input: s = "abab", p = "ab"
        Output: [0,1,2]
        
        Explanation:
        The substring with start index = 0 is "ab", which is an anagram of "ab".
        The substring with start index = 1 is "ba", which is an anagram of "ab".
        The substring with start index = 2 is "ab", which is an anagram of "ab".
        
        Constraints:

        1 <= s.length, p.length <= 3 * 104
        s and p consist of lowercase English letters.

*/
function isAnagram(word1, {...word2}) {
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
      
function adjustSubStringCounts(start, words, end) {
        words[start] = words[start] - 1;
        if(words[start] == 0) {
                delete words[start];
        }
        if(end in words) {
                words[end] = words[end] + 1;
        }
        else{
                words[end] = 1;
        }
        return words;
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
      
var findAnagrams = function(s, p) {

        let substr = "";
        let anagramSize = p.length;
        let anagrams = [];

        let words = countCharacterOccurrences(p);
        let breakwords = {};


        for( let i=0; i<s.length; i++ ){

                substr = s.slice( i, anagramSize+i );
                if( substr.length != p.length) {
                        break;
                }
                else {
                        if( i==0 ) {
                                breakwords = countCharacterOccurrences(substr);
                        }
                        else {
                                breakwords = adjustSubStringCounts(s[i-1], breakwords, substr[substr.length-1]);
                        }
                        if( isAnagram(breakwords, words) ) {
                                anagrams.push(i);
                        }
                }  
        }

        return anagrams;

};