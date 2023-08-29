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

    for (const [key, value] of Object.entries(dictionaryOne)) {
        if (dictionaryTwo[key] !== value) {
            return false;
        }
    }

    return true;
};

// SOLUTION 2 ( One Liner )

const isAnagram2 = (s: string, t: string): boolean => s.split("").sort().join("") === t.split("").sort().join("");
