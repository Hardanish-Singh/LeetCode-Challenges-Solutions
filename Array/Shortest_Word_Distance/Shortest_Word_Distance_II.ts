// Leetcode: https://leetcode.com/problems/shortest-word-distance-ii/
// @ts-nocheck

// Solution 1
class WordDistance {
    #map: Record<string, number[]>; // private property
    constructor(wordsDict: string[]) {
        this.#map = {};
        wordsDict.forEach((word, index) =>
            this.#map[word] ? this.#map[word].push(index) : (this.#map[word] = [index])
        );
    }

    shortest(word1: string, word2: string): number {
        let indexes1 = this.#map[word1];
        let indexes2 = this.#map[word2];
        let min = Number.POSITIVE_INFINITY;

        for (let index1 of indexes1) {
            for (let index2 of indexes2) {
                min = Math.min(min, Math.abs(index1 - index2));
            }
        }

        return min;
    }
}

// Solution 2
var WordDistance = (wordsDict: string[]) => {
    this.map = {};
    wordsDict.forEach((word, index) => (this.map[word] ? this.map[word].push(index) : (this.map[word] = [index])));
};

WordDistance.prototype.shortest = (word1: string, word2: string): number => {
    let indexes1 = this.map[word1];
    let indexes2 = this.map[word2];
    let min = Number.POSITIVE_INFINITY;

    for (let index1 of indexes1) {
        for (let index2 of indexes2) {
            min = Math.min(min, Math.abs(index1 - index2));
        }
    }

    return min;
};
