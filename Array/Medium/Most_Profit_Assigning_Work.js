// Leetcode: https://leetcode.com/problems/most-profit-assigning-work/

const maxProfitAssignment = (difficulty, profit, worker) => {
    // Create a map of job's difficulty and its corresponding maximum profit.
    const jobMap = difficulty.reduce((map, difficult, index) => {
        const currentProfit = map.get(difficult) ?? 0;
        const maxProfit = Math.max(currentProfit, profit[index]);
        return map.set(difficult, maxProfit);
    }, new Map());

    let maxProfit = 0;
    let index = 0;

    difficulty.sort((a, b) => a - b);
    worker.sort((a, b) => a - b);

    // For each worker, find the maximum profit that can be made by assigning jobs to workers.
    return worker.reduce((result, ability) => {
        // while loop that continues as long as the current job's difficulty is less than or equal to the worker's ability.
        while (difficulty[index] <= ability) maxProfit = Math.max(maxProfit, jobMap.get(difficulty[index++]));
        return result + maxProfit;
    }, 0);
};
