/*
 * @param {number} x
 * @param {number} n
 * @return {number}
*/


 var myPow = function(x, n) {
        // let power = 1;
        // if( n < 0 ) {
        //         x = 1/x;
        //         n = -n;
        // }
        // for( let i=1; i<=n; i++ ) {
        //         power *= x;
        // }
        // return power;
        
        let power = 1;
        let product = x;
        for( let i=Math.abs(n); i>0; i = parseInt( i/2 ) ){
                if( i%2 !== 0 ) {
                        power = power * product;
                }
                product = product * product;
        }
        return n < 0 ? 1/power : power;
};