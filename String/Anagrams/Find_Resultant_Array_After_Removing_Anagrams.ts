// Leetcode: https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

type Anagram = {
    [key: string]: number;
};

const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) {
        return false;
    }
    let dictionaryOne: Anagram = {};
    let dictionaryTwo: Anagram = {};

    for (let i: number = 0; i < s.length; i++) {
        dictionaryOne[s[i]] ? (dictionaryOne[s[i]] += 1) : (dictionaryOne[s[i]] = 1);
        dictionaryTwo[t[i]] ? (dictionaryTwo[t[i]] += 1) : (dictionaryTwo[t[i]] = 1);
    }

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

const removeAnagrams = (words: string[]): string[] => {
    for (let i: number = 1; i < words.length; i++) {
        const firstWord: string = words[i - 1];
        const secondWord: string = words[i];
        if (isAnagram(firstWord, secondWord)) {
            words.splice(i, 1);
            i--;
        }
    }
    return words;
};
