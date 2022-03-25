/*
 * @param { number[] } arr
 * @return { number[] }
*/

var replaceElements = function(arr) {
        var max = -1;
        var temp;
        for( let i = arr.length - 1; i >= 0; i-- ) {
                temp = arr[i];
                arr[i] = max;
                max = Math.max( max, temp );
        }
        return arr;
};