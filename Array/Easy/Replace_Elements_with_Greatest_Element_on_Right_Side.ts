// Leetcode: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

const replaceElements = (arr: number[]): number[] =>
    arr.reduce((accumulator: number[], _, currentIndex: number, arr: number[]) => {
        accumulator[currentIndex] = Math.max(...arr.slice(currentIndex + 1), -1);
        return accumulator;
    }, []);
