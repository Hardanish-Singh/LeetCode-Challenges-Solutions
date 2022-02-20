/*
        Given an array of intervals where intervals[i] = [start(i), end(i)], merge all overlapping intervals, 
        and return an array of the non-overlapping intervals that cover all the intervals in the input.

        Example 1:
                Input: intervals = [ [1,3], [2,6], [8,10], [15,18] ]
                Output: [ [1,6], [8,10], [15,18] ]
                Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
        Example 2:
                Input: intervals = [ [1,4], [4,5] ]
                Output: [ [1,5] ]
                Explanation: Intervals [1,4] and [4,5] are considered overlapping.

        Constraints:
                1) 1 <= intervals.length <= 10^4
                2) intervals[i].length == 2
                3) 0 <= start(i) <= end(i) <= 10^4
        
        Companies Who Asked this Question:
                1) Amazon
                2) Facebook
                3) Microsoft
                4) JPMorgan
                5) Salesforce
                6) Google
                7) Adobe
                8) Bloomberg
                9) Uber
                11) Apple
                12) IBM
                13) VMware
                14) eBay
                15) ByteDance
                16) LinkedIn
                17) Twitter
                18) Oracle
                19) Splunk
                20) tiktok
                21) Reddit
*/

/*
 * @param { number[][] } intervals
 * @return { number[][] }
*/

var merge = function( intervals ) {
        intervals.sort( (a,b) => a[0] - b[0] );
        for( let i = 0; i < intervals.length - 1; i++ ) {
                let j = i + 1;
                if( 
                        intervals[j][0] >= intervals[i][0] 
                                && 
                        intervals[j][0] <= intervals[i][1] 
                ) {
                        intervals[i] = [ intervals[i][0], Math.max( intervals[i][1], intervals[j][1] ) ];
                        intervals.splice(j, 1);
                        i--;
                }
        }
        return intervals;
};