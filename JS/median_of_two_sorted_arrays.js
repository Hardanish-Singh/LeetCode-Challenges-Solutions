/*
    There are two sorted arrays nums1 and nums2 of size m and n respectively.

    Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

    You may assume nums1 and nums2 cannot be both empty.

    Example 1:

    nums1 = [1, 3]
    nums2 = [2]

    The median is 2.0
    Example 2:

    nums1 = [1, 2]
    nums2 = [3, 4]

    The median is (2 + 3)/2 = 2.5
*/
var findMedianSortedArrays = function(array1, array2) {
    /*
        ARRAY 1 SHOULD ALWAYS BE SMALLER THAN ARRAY 2, 
        IF IT IS NOT, THEN SWAP THE ARRAYS
    */
    if (array1.length > array2.length) {
        return findMedianSortedArrays(array2, array1);
    }
    
    let minIndex = 0;
    let maxIndex = array1.length;
    
    while(true) {
        let partitionX = parseInt((minIndex + maxIndex) / 2);
        let partitionY = parseInt(((array1.length+array2.length+1)/2)-partitionX);

        //FIRST HALF ELEMENTS
        let firstHalfXElements = array1.slice(0, partitionX);
        let firstHalfYElements = array2.slice(0, partitionY);
        let maxLeftX = (partitionX == 0) ? -2147483648 : firstHalfXElements[firstHalfXElements.length-1];
        let maxLeftY = (partitionY == 0) ? -2147483648 : firstHalfYElements[firstHalfYElements.length-1];
        
        //SECOND HALF ELEMENTS
        let secondHalfXElements = array1.slice(partitionX);
        let secondHalfYElements = array2.slice(partitionY);
        let minRightX = (partitionX == array1.length) ? 2147483647 : secondHalfXElements[0];
        let minRightY = (partitionY === array2.length) ? 2147483647 : secondHalfYElements[0]; 

        if(minRightY >= maxLeftX && minRightX >= maxLeftY) {
            if((array1.length + array2.length)%2 ===0)  return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/2;
            else return Math.max(maxLeftX, maxLeftY);
        }
        else if(maxLeftX > minRightY) maxIndex = partitionX - 1;
        else minIndex = partitionX + 1;
    }
};


/*
SOLUTION EFFICIENCY
    RUNTIME: 100 ms, faster than 95.09% of JavaScript online submissions for Median of Two Sorted Arrays.
    MEMORY USAGE: 40.3 MB, less than 23.40% of JavaScript online submissions for Median of Two Sorted Arrays.
*/