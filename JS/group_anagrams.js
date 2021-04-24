/*
        Given an array of strings strs, group the anagrams together. 
        You can return the answer in any order.

        An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

        Example 1:
                Input: strs = ["eat","tea","tan","ate","nat","bat"]
                Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
        
        Example 2:
                Input: strs = [""]
                Output: [[""]]
        
        Example 3:
                Input: strs = ["a"]
                Output: [["a"]]
        
        Constraints:
                1) 1 <= strs.length <= 104
                2) 0 <= strs[i].length <= 100
                3) strs[i] consists of lower-case English letters.
        
        Companies Where this Question Was Asked Before:
                1) Amazon
                2) Microsoft
                3) Goldman Sachs
                4) Apple
                5) Uber
                6) eBay
                7) VMware
                8) Oracle
                9) Facebook
                10) Yandex
                11) Twilio
                12) BlackRock
                13) Google
                14) Expedia
                15) Affirm
                16) Docusign
                17) Cisco
                18) Two Sigma
                19) ByteDance
        
        Difficulty Level: 
                Medium
*/

/*
        This function sorts multi-dimensional array by its index.
        In this case, we are sorting by index 0
*/
function sortAnagrams(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
}

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
    
function countWordOccurences(word) {
        
        let words = {};
        let count = 1;

        for( let i=0; i<word.length; i++){
                if(word[i] in words) continue;
                for( let k=i+1; k<word.length; k++ ){
                        if( word[i] == word[k] ) {
                                count++;
                        }
                }
                words[word[i]] = count;
                count = 1;
        }

        return words;
}
    
var groupAnagrams = function(strs) {

        strs = strs.sort( ( a, b ) => a.length - b.length );

        let sortedArray = [];
        let temp = [];
        let groupAnagrams = [];

        for( let i=0; i<strs.length; i++ ){
                temp.push(strs[i].split("").sort().join(""));
                temp.push(strs[i]);
                sortedArray.push(temp);
                temp = [];
        }

        sortedArray.sort(sortAnagrams);

        for( let i=0; i<sortedArray.length; i++ ) {
                
                temp = [];
                let flag = false;

                let word1 = countWordOccurences(sortedArray[i][0]);
                
                for( let j=i+1; j<sortedArray.length; j++ ) {
                
                        if( sortedArray[i][0] != sortedArray[j][0] ) {
                                break;
                        }
                        
                        let word2 = countWordOccurences(sortedArray[j][0]);
                        if( isAnagram( word1, word2 ) ) {
                                temp.push( sortedArray[j][1] );
                                sortedArray.splice(j,1);
                                j--;
                                flag = true;
                        } 
                
                }
                
                if( flag == true ) {
                        temp.push( sortedArray[i][1] );
                        groupAnagrams.push(temp);
                } 
                else if(flag == false) {
                        groupAnagrams.push([sortedArray[i][1]]);
                } 
                
        }

        return groupAnagrams;
};