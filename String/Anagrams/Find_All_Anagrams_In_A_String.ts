// Leetcode: https://leetcode.com/problems/find-all-anagrams-in-a-string/

type Anagram = {
    [key: string]: number;
};

const isAnagram = (dictionaryOne: Anagram, dictionaryTwo: Anagram): boolean => {
    for (const [key1, value1] of Object.entries(dictionaryOne)) {
        for (const [key2, value2] of Object.entries(dictionaryTwo)) {
            if (key1 === key2 && value1 === value2) {
                delete dictionaryTwo[key2];
                delete dictionaryOne[key1];
                break;
            }
        }
    }
    return Object.keys(dictionaryOne).length === 0 && Object.keys(dictionaryTwo).length === 0;
};

const adjustCharacterOccurrences = (start: string, end: string, hashmap1: Anagram): Anagram => {
    hashmap1[start] -= 1;
    if (hashmap1[start] == 0) {
        delete hashmap1[start];
    }
    end in hashmap1 ? (hashmap1[end] += 1) : (hashmap1[end] = 1);
    return hashmap1;
};

const countCharacterOccurrences = (word: string): Anagram => {
    let countOccurrences: Anagram = {};
    for (let i = 0; i < word.length; i++) {
        word[i] in countOccurrences ? (countOccurrences[word[i]] += 1) : (countOccurrences[word[i]] = 1);
    }
    return countOccurrences;
};

const findAnagrams = (s: string, p: string): number[] => {
    let leftPointer: number = 0;
    let result: number[] = [];
    let hashmap1: Anagram = {};
    let hashmap2: Anagram = countCharacterOccurrences(p);

    while (leftPointer + p.length <= s.length) {
        let subString: string = s.slice(leftPointer, leftPointer + p.length);
        leftPointer === 0
            ? (hashmap1 = countCharacterOccurrences(subString))
            : (hashmap1 = adjustCharacterOccurrences(s[leftPointer - 1], subString[subString.length - 1], hashmap1));
        if (isAnagram(JSON.parse(JSON.stringify(hashmap1)), JSON.parse(JSON.stringify(hashmap2)))) {
            result.push(leftPointer);
        }
        leftPointer++;
    }

    return result;
};
