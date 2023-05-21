// Leetcode: https://leetcode.com/problems/last-stone-weight-ii/

const lastStoneWeightII = (stones: Array<number>): number => {
        let cache: {
                [key: string]: number;
        } = {};
        const helper = (index: number, sum: number, stones: Array<number>): number => {
                let key = `${index},${sum}`;
                if (key in cache) {
                        return cache[key];
                }
                if (index === stones.length) {
                        return sum < 0 ? Number.MAX_VALUE : sum;
                }
                let currentValue = stones[index];
                let positive = helper(index + 1, sum + currentValue, stones);
                let negative = helper(index + 1, sum - currentValue, stones);
                let result = Math.min(positive, negative);
                cache[key] = result;
                return result;
        };
        return helper(0, 0, stones);
};
