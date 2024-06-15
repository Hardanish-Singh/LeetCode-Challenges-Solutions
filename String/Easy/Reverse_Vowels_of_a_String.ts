// Leetcode: https://leetcode.com/problems/reverse-vowels-of-a-string/

// Solution 1
var reverseVowels = (s: string): string => {
    let left = 0;
    let right = s.length - 1;
    const vowels = "aeiouAEIOU";
    let charArray = s.split("");
    while (left < right) {
        if (vowels.includes(charArray[left]) && vowels.includes(charArray[right])) {
            [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
            left++;
            right--;
        } else if (!vowels.includes(charArray[left])) {
            left++;
        } else {
            right--;
        }
    }
    return charArray.join("");
};

// Solution 2
var reverseVowels = (s: string): string => {
    let left = 0;
    let right = s.length - 1;
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let charArray = s.split("");
    while (left < right) {
        if (vowels.has(charArray[left]) && vowels.has(charArray[right])) {
            [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
            left++;
            right--;
        } else if (!vowels.has(charArray[left])) {
            left++;
        } else {
            right--;
        }
    }
    return charArray.join("");
};

// Solution 3
var reverseVowels = (s: string): string => {
    const vowels = s.match(/[aeiouAEIOU]/g) as string[];
    return s.replace(/[aeiouAEIOU]/g, () => vowels.pop()!);
};
