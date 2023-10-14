// Leetcode: https://leetcode.com/problems/count-vowel-substrings-of-a-string/

const countVowelSubstrings = (word: string): number => {
    let vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u']);
    let count: number = 0;

    for(let i: number = 0; i < word.length; i++) {
        let set: Set<string> = new Set();
        for(let j: number = i; j < word.length; j++) {
            let letter: string = word[j];
            if (!vowels.has(word[j])) {
                break;
            }
            set.add(letter);
            if (set.size === vowels.size) {
                count++;
            }
        }
    }

    return count;
};