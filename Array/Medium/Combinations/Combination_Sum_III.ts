/*
        Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
                Only numbers 1 through 9 are used.
                Each number is used at most once.
        Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.        

        Example 1:
                Input: k = 3, n = 7
                Output: 
                        [
                                [1,2,4]
                        ]
        Explanation: 1 + 2 + 4 = 7, There are no other valid combinations.

        Example 2:
                Input: k = 3, n = 9
                Output: 
                        [
                                [1,2,6],
                                [1,3,5],
                                [2,3,4]
                        ]
                Explanation:
                1 + 2 + 6 = 9
                1 + 3 + 5 = 9
                2 + 3 + 4 = 9
                There are no other valid combinations.
        
        Example 3:
                Input: k = 4, n = 1
                Output: []
                Explanation: There are no valid combinations.
                Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
        
        Example 4:
                Input: k = 3, n = 2
                Output: []
                Explanation: There are no valid combinations.
        
        Example 5:
                Input: k = 9, n = 45
                Output: [[1,2,3,4,5,6,7,8,9]]
                Explanation:
                1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
                There are no other valid combinations.

        Constraints:
                1) 2 <= k <= 9
                2) 1 <= n <= 60
*/

/*
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
*/

function combinationSum3( k: number, n: number ): number[][] {
        let str:string = "";
        for( let i:number = 1; i<10; i++ ) {
                str = str + i + ",";
        }
        str = str.slice(0, str.length-1);
        let nums:number[] = str.split(",").map( Number );
        let temp:number[] = [];
        let temp_combinations: number[][] = [];
        let combination_sum:number[][] = [];
        
        for( let i:number = 0; i<nums.length; i++ ) {
                temp_combinations.push( [ nums[i] ] );
                temp = [...nums.slice(i+1)];
                if( temp.length < k-1 ) {
                        break;
                }
                while( true ) {
                        if( temp_combinations[0].length === k ) {
                                break;
                        }
                        let elementArray:number[] = temp_combinations.shift();
                        for( let j:number = 0; j<temp.length; j++ ) {
                               
                                if( elementArray[elementArray.length-1] < temp[j] ) {
                                                
                                        let t:number[] = [ ...elementArray, temp[j] ];
                                        
                                        if( t.length === k ){
                                                let sum:number = 0;
                                                for( let b:number = 0; b<t.length; b++ ) {
                                                        sum += t[b];    
                                                }
                                                if( sum === n ) {
                                                        combination_sum.push(t);
                                                }
                                        }

                                        if(    
                                                (
                                                        nums.slice(t[t.length-1]).length
                                                                +
                                                        t.length
                                                                >= 
                                                        k
                                                )
                                        ) {
                                               temp_combinations.push( t ); 
                                        }
                                        else {
                                                break;
                                        }
                                }
                        }
                }
                temp_combinations = [];
        }
        return combination_sum;
};