/*
 * @param { string } s
 * @return { boolean }
*/
 var isPalindrome = function( str ) {
        str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
        //str = str.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
        let leftPointer = 0;
        let rightPointer = str.length - 1;
        while( leftPointer <= rightPointer ) {
                if( str[leftPointer] !== str[rightPointer] ) {
                        return false;
                        break;
                }
                leftPointer++;
                rightPointer--;
        }
        return true;
};