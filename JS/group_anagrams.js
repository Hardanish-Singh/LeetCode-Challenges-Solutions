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
        SOLUTION 1 
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
/*
        This function checks if two dictionaries are Anagrams or not
*/
function isAnagram(s1, {...s2}) {
        for(i in s1) {
                let isFound = false;
                for(j in s2) {
                        if(i == j && s1[i] == s2[j]) {
                                delete s2[j];
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

var groupAnagrams = function(strs) {

        let sortedArray = [];
        let tempArray = [];
        let groupAnagrams = [];

        for( let i=0; i<strs.length; i++ ){
                tempArray.push(strs[i].split("").sort().join(""));
                tempArray.push(strs[i]);
                sortedArray.push(tempArray);
                tempArray = [];
        }

        sortedArray.sort(sortAnagrams);

        for( let i=0; i<sortedArray.length; i++ ) {
                
                tempArray = [];
                let checkAnagram = false;

                let word1 = countCharacterOccurrences(sortedArray[i][0]);
                
                for( let j=i+1; j<sortedArray.length; j++ ) {
                
                        if( sortedArray[i][0] != sortedArray[j][0] ) {
                                break;
                        }
                        
                        let word2 = countCharacterOccurrences(sortedArray[j][0]);
                        if( isAnagram( word1, word2 ) ) {
                                tempArray.push( sortedArray[j][1] );
                                sortedArray.splice(j,1);
                                j--;
                                checkAnagram = true;
                        } 
                
                }
                
                if( checkAnagram == true ) {
                        tempArray.push( sortedArray[i][1] );
                        groupAnagrams.push(tempArray);
                } 
                else {
                        groupAnagrams.push([sortedArray[i][1]]);
                } 
                
        }

        return groupAnagrams;
};

/*
        SOLUTION 2

        var groupAnagrams = function(strs) {

                let groupingAnagrams = {};

                for( let i=0; i<strs.length; i++ ){

                let sortedAnagram = strs[i].split("").sort().join("");

                if( !(sortedAnagram in groupingAnagrams) ) {
                        groupingAnagrams[sortedAnagram] = [strs[i]];
                } else {
                        groupingAnagrams[sortedAnagram].push(strs[i]);
                }

                }

                return Object.values(groupingAnagrams);

        };
*/