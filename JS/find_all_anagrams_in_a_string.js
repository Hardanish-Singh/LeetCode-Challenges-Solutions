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
function isAnagram(s1, {...s2}){
        for(i in s1) {
                let flag = false;
                for(j in s2) {
                        if(i == j && s1[i] == s2[j]) {
                                delete s2[j];
                                flag = true;
                                break;
                        }
                }
                if(flag == false) return false;
        }
        return true;
}
      
function countSubStringOccurences(start, words, end) {
        words[start] = words[start] - 1;
        if(words[start] == 0) delete words[start];
        if(end in words) words[end] = words[end] + 1;
        else words[end] = 1;
        return words;
}
      
function countWordOccurences(word) {
        
        let words = {};
        let count = 1;

        for( let i=0; i<word.length; i++){
                if(word[i] in words) continue;
                for( let k=i+1; k<word.length; k++ ){
                        if( word[i] == word[k] ) count++;
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

        let words = countWordOccurences(p);
        let breakwords = {};


        for( let i=0; i<s.length; i++ ){

                substr = s.slice(i,anagramSize+i);
                if( substr.length != p.length || substr.length < p.length) break;
                else {
                        if( i==0 ) breakwords = countWordOccurences(substr);
                        else breakwords = countSubStringOccurences(s[i-1], breakwords, substr[substr.length-1]);
                        if( isAnagram(breakwords, words) ) anagrams.push(i);
                }  
        }

        return anagrams;

};