// Leetcode: https://leetcode.com/problems/maximum-units-on-a-truck/

// Solution 1
var maximumUnits = (boxTypes: number[][], truckSize: number): number => {
    // SORT BOXES IN DESCENDING ORDER
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        const [numberOfBoxes, numberOfUnitsPerBox] = boxTypes[i];
        let boxCount = Math.min(truckSize, numberOfBoxes);
        truckSize -= boxCount;
        totalUnits += boxCount * numberOfUnitsPerBox;
    }
    return totalUnits;
};

// Solution 2
var maximumUnits = (boxTypes: number[][], truckSize: number): number =>
    boxTypes
        .sort((a, b) => b[1] - a[1])
        .reduce((totalUnits, boxType) => {
            const [numberOfBoxes, numberOfUnitsPerBox] = boxType;
            let boxCount = Math.min(truckSize, numberOfBoxes);
            truckSize -= boxCount;
            totalUnits += boxCount * numberOfUnitsPerBox;
            return totalUnits;
        }, 0);

// Solution 3
var maximumUnits = (boxTypes: number[][], truckSize: number): number => {
    // SORT BOXES IN DESCENDING ORDER
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        const [numberOfBoxes, numberOfUnitsPerBox] = boxTypes[i];
        if (truckSize > numberOfBoxes) {
            totalUnits += numberOfBoxes * numberOfUnitsPerBox;
        } else {
            totalUnits += truckSize * numberOfUnitsPerBox;
        }
        truckSize -= numberOfBoxes;
        if (truckSize <= 0) break;
    }
    return totalUnits;
};
