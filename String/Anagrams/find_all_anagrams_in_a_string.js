// Leetcode: https://leetcode.com/problems/find-all-anagrams-in-a-string/

/*
        This function checks if two dictionaries are Anagrams or not
*/
function isAnagram(word1, { ...word2 }) {
        for (key1 in word1) {
                let isFound = false;
                for (key2 in word2) {
                        if (key1 == key2 && word1[key1] == word2[key2]) {
                                delete word2[key2];
                                isFound = true;
                                break;
                        }
                }
                if (isFound == false) {
                        return false;
                }
        }

        return true;
}

function adjustSubStringCounts(start, words, end) {
        words[start] = words[start] - 1;
        if (words[start] == 0) {
                delete words[start];
        }

        if (end in words) {
                words[end] = words[end] + 1;
        } else {
                words[end] = 1;
        }

        return words;
}

function countCharacterOccurrences(word) {
        let countOccurrences = {};
        for (let i = 0; i < word.length; i++) {
                word[i] in countOccurrences ? (countOccurrences[word[i]] += 1) : (countOccurrences[word[i]] = 1);
        }
        return countOccurrences;
}

var findAnagrams = function (s, p) {
        let substr = "";
        let anagrams = [];

        let words = countCharacterOccurrences(p);
        let breakwords = {};

        for (let i = 0; i < s.length; i++) {
                substr = s.slice(i, p.length + i);
                if (substr.length != p.length) {
                        break;
                } else {
                        if (i == 0) {
                                breakwords = countCharacterOccurrences(substr);
                        } else {
                                breakwords = adjustSubStringCounts(s[i - 1], breakwords, substr[substr.length - 1]);
                        }
                        if (isAnagram(breakwords, words)) {
                                anagrams.push(i);
                        }
                }
        }

        return anagrams;
};
