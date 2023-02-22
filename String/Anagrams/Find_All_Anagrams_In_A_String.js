// Leetcode: https://leetcode.com/problems/find-all-anagrams-in-a-string/

const isAnagram = (hashmap1, hashmap2) => {
        for (const [key1, value1] of Object.entries(hashmap1)) {
                let isFound = false;
                for (const [key2, value2] of Object.entries(hashmap2)) {
                        if (key1 === key2 && value1 === value2) {
                                isFound = true;
                                break;
                        }
                }
                if (!isFound) {
                        return false;
                }
        }
        return true;
};

const adjustCharacterOccurrences = (start, end, words) => {
        words[start] = words[start] - 1;
        if (words[start] === 0) {
                delete words[start];
        }
        end in words ? (words[end] = words[end] + 1) : (words[end] = 1);
        return words;
};

const countCharacterOccurrences = (word) => {
        let countOccurrences = {};
        for (let i = 0; i < word.length; i++) {
                word[i] in countOccurrences ? (countOccurrences[word[i]] += 1) : (countOccurrences[word[i]] = 1);
        }
        return countOccurrences;
};

var findAnagrams = function (s, p) {
        let anagrams = [];
        let hashmap1 = {};
        let hashmap2 = countCharacterOccurrences(p);

        for (let i = 0; i <= s.length - p.length; i++) {
                let substr = s.slice(i, p.length + i);
                i === 0
                        ? (hashmap1 = countCharacterOccurrences(substr))
                        : (hashmap1 = adjustCharacterOccurrences(s[i - 1], substr[substr.length - 1], hashmap1));
                if (isAnagram(hashmap1, hashmap2)) {
                        anagrams.push(i);
                }
        }

        return anagrams;
};
