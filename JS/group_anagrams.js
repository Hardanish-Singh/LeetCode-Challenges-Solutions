// Leetcode: https://leetcode.com/problems/group-anagrams/

/* 
        SOLUTION 1 
*/

/*
        This function sorts multi-dimensional array by its index.
        In this case, we are sorting by index 0
*/
function sortAnagrams(value1, value2) {
        if (value1[0] === value2[0]) {
                return 0;
        } else {
                return value1[0] > value2[0] ? 1 : -1;
        }
}
/*
        This function checks if two dictionaries are Anagrams or not
*/
function isAnagram(word1, word2) {
        for (key1 in word1) {
                let isFound = false;
                for (key2 in word2) {
                        if (key1 == key2 && word1[key1] == word2[key2]) {
                                delete word2[key2];
                                delete word1[key1];
                                isFound = true;
                                break;
                        }
                }
                if (isFound == false) return false;
        }
        return true;
}
/*
        This function counts character occurrences in a word, and returns dictionary
*/
function countCharacterOccurrences(word) {
        let words = {};
        let count = 1;

        for (let i = 0; i < word.length; i++) {
                if (word[i] in words) continue;
                for (let j = i + 1; j < word.length; j++) {
                        if (word[i] == word[j]) {
                                count++;
                        }
                }
                words[word[i]] = count;
                count = 1;
        }

        return words;
}

var groupAnagrams = function (strs) {
        let sortedArray = [];
        let tempArray = [];
        let groupAnagrams = [];

        for (let i = 0; i < strs.length; i++) {
                tempArray.push(strs[i].split("").sort().join(""));
                tempArray.push(strs[i]);
                sortedArray.push(tempArray);
                tempArray = [];
        }

        sortedArray.sort(sortAnagrams);

        for (let i = 0; i < sortedArray.length; i++) {
                tempArray = [];
                let checkAnagram = false;

                let word1 = countCharacterOccurrences(sortedArray[i][0]);

                for (let j = i + 1; j < sortedArray.length; j++) {
                        if (sortedArray[i][0] != sortedArray[j][0]) {
                                break;
                        }

                        let word2 = countCharacterOccurrences(sortedArray[j][0]);
                        if (isAnagram(word1, word2)) {
                                tempArray.push(sortedArray[j][1]);
                                sortedArray.splice(j, 1);
                                j--;
                                checkAnagram = true;
                        }
                }

                if (checkAnagram == true) {
                        tempArray.push(sortedArray[i][1]);
                        groupAnagrams.push(tempArray);
                } else {
                        groupAnagrams.push([sortedArray[i][1]]);
                }
        }

        return groupAnagrams;
};

/*
        SOLUTION 2

        var groupAnagrams = function(strs) {

                let groupingAnagrams = {};

                for( let i=0; i<strs.length; i++ ) {

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
