// Leetcode: https://leetcode.com/problems/sort-characters-by-frequency/

// Solution 1
var frequencySort = (str) => {
    let map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    const sortedChars = Object.entries(map).sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]));

    let result = "";
    for (let char of sortedChars) {
        result += char[0].repeat(char[1]);
    }

    return result;
};

// Solution 2
var frequencySort = (str) => {
    let map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    const sortedChars = Object.entries(map).sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]));

    return sortedChars.reduce((result, char) => result + char[0].repeat(char[1]), "");
};

// Solution 3
const frequencySort = (str) => {
    let map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    let sortedChars = Object.entries(map).sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });

    let result = "";
    for (let char of sortedChars) {
        result += char[0].repeat(char[1]);
    }
    return result;
};

// Solution 4
const frequencySort = (str) => {
    let map = new Map();
    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let sortedChars = Array.from(map).sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });

    let result = "";
    for (let char of sortedChars) {
        result += char[0].repeat(char[1]);
    }
    return result;
};

// Solution 5
var frequencySort = (str) => {
    let frequencyMap = {};
    for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    let sortedChars = Object.keys(frequencyMap).sort((a, b) => {
        if (frequencyMap[a] === frequencyMap[b]) {
            return a.localeCompare(b);
        }
        return frequencyMap[b] - frequencyMap[a];
    });

    let result = "";
    for (let char of sortedChars) {
        result += char.repeat(frequencyMap[char]);
    }

    return result;
};
