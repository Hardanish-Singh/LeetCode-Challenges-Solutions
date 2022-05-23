/**
 * @param { number[] } heights
 * @return { number }
*/

var largestRectangleArea = function(buildings) {
        //         var maxArea = 0;
        //         for( let i = 0; i < buildings.length; i++ ) {
        //                 let height = buildings[i];
        //                 let width = 1;
        //                 let left = i - 1;
        //                 let right = i + 1;
                        
        //                 while( buildings[left--] >= buildings[i] ) {
        //                         width++;  
        //                 }
        //                 while( buildings[right++] >= buildings[i] ){
        //                         width++;
        //                 }
                        
        //                 let area = width * height;
        //                 maxArea = Math.max( area, maxArea);
        //         }
        //         return maxArea;
                
        var maxArea = 0;
        
        for( let i = 0; i < buildings.length; i++ ) {
                let width = 1;
                let height = Number.MAX_VALUE;
                for( let j = i; j < buildings.length; j++ ) {
                        height = Math.min(height, buildings[j])
                        let area = (width) * height;
                        maxArea = Math.max( area, maxArea);
                        width++;
                }
        }
        
        return maxArea;
};