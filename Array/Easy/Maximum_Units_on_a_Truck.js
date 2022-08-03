// Leetcode: https://leetcode.com/problems/maximum-units-on-a-truck/

/*
        You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxes, numberOfUnitsPerBox]:
                1) numberOfBoxes is the number of boxes of type i.
                2) numberOfUnitsPerBox is the number of units in each box of the type i.
        
        You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. 
        You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
        
        Return the maximum total number of units that can be put on the truck.
*/

// SOLUTION 1

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

// SOLUTION 2

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
                if( truckSize > numberOfBoxes ) {
                        totalUnits += numberOfBoxes * numberOfUnitsPerBox;
                } else {
                        totalUnits += truckSize * numberOfUnitsPerBox;
                }
                truckSize -= numberOfBoxes;
                if( truckSize <= 0 ) {
                        break;
                }
        }
        return totalUnits;
};