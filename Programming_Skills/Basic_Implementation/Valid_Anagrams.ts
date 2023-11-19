// Leetcode: https://leetcode.com/problems/valid-anagram/

// SOLUTION 1

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

// SOLUTION 2 ( One Liner )

const isAnagram2 = (s: string, t: string): boolean => s.split("").sort().join("") === t.split("").sort().join("");
