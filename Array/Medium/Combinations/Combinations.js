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
                while( true ) {
                        if( temp_combinations[0].length === k ) {
                                break;
                        }
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

console.log( combine(20, 16) );