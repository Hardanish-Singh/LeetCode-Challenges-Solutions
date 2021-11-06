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