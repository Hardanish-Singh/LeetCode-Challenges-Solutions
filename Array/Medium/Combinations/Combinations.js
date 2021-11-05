/*
        Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
        You may return the answer in any order.

        Example 1:
                Input: n = 4, k = 2
                Output:
                        [
                                [2,4],
                                [3,4],
                                [2,3],
                                [1,2],
                                [1,3],
                                [1,4],
                        ]
        Example 2:
                Input: n = 1, k = 1
                Output: 
                        [
                                [1]
                        ]
        
        Constraints:
                1) 1 <= n <= 20
                2) 1 <= k <= n
*/

var combine = function( n, k ) {
        let str = "";
        for( let i=0; i<n; i++ ) {
                str = str + (i + 1) + ",";
        }
        str = str.slice(0, str.length-1);
        let nums = str.split(",");
        let combinations = [];
        let temp = [];
        let temp_combinations = [];

        if( k === 0 ) {
                return [nums];
        }
        else if( k === 1 ) {
                for( let i=0; i<nums.length; i++ ){
                       combinations.push([nums[i]]); 
                }
                return combinations;
        }

        
        for( let i=0; i<nums.length; i++ ) {
                temp_combinations.push([nums[i]]);
                temp = [...nums.slice(i+1)];
                if( temp.length < k-1 ) {
                        break;
                }
                while( !( temp_combinations[0].length === k ) ) {
                        let elementArray = temp_combinations.shift();
                        for( let j=0; j<temp.length; j++ ) {
                               
                                if( +elementArray[elementArray.length-1] < +temp[j] ) {
                                                
                                        let t = [ ...elementArray, temp[j] ];
                                        
                                        if( t.length === k ){
                                                combinations.push( t );
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
        return combinations;
};