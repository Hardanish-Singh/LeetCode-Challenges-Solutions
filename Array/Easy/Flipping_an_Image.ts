// Leetcode: https://leetcode.com/problems/flipping-an-image/

const flipAndInvertImage = (image: number[][]): number[][] => image.map((img) => img.reverse().map((x) => 1 - x));
