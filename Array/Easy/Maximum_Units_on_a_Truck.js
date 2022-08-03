// Leetcode: https://leetcode.com/problems/maximum-units-on-a-truck/

/**
 * @param { number[][] } boxTypes
 * @param { number } truckSize
 * @return { number }
*/

var maximumUnits = function( boxTypes, truckSize ) {
        // SORT BOXES IN DESCENDING ORDER
        boxTypes.sort( (a, b) => b[ 1 ] - a[ 1 ] );
        let totalUnits = 0;
        for( let i = 0; i < boxTypes.length; i++ ) {
                const [numberOfBoxes, numberOfUnitsPerBox] = boxTypes[i];
                let boxCount = Math.min( truckSize, numberOfBoxes );
                truckSize -= boxCount;
                totalUnits += boxCount * numberOfUnitsPerBox;
                if( truckSize <= 0 ) {
                        break;
                }
        }
        return totalUnits;
};