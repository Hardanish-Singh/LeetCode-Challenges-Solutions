// Leetcode: https://leetcode.com/problems/most-profit-assigning-work/
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
        let maxProfit = 0;
        let hash_map = {};
        worker.sort((a, b) => a - b);

        for (let i = 0; i < profit.length; i++) {
                if (difficulty[i] in hash_map) {
                        hash_map[difficulty[i]] = Math.max(hash_map[difficulty[i]], profit[i]);
                } else {
                        hash_map[difficulty[i]] = profit[i];
                }
        }

        const ordered = Object.keys(hash_map)
                .sort()
                .reduce((obj, key) => {
                        obj[key] = hash_map[key];
                        return obj;
                }, {});

        //         for( let i = 0; i < worker.length; i++ ) {
        //                 let maxs = 0;
        //                 for( const[key, value] of Object.entries( ordered ) ) {
        //                         if( worker[i] < +key ) break;
        //                         maxs = Math.max( maxs, value );
        //                 }
        //                 maxProfit += maxs;
        //         }

        //         return maxProfit;

        let k = Object.keys(ordered);
        let v = Object.values(ordered);
        let index = 0;
        let maxs = 0;

        for (let i = 0; i < worker.length; i++) {
                for (let j = index; j < k.length; j++) {
                        if (worker[i] < +k[j]) break;
                        maxs = Math.max(maxs, v[j]);
                        index++;
                }
                maxProfit += maxs;
        }
        return maxProfit;
};
