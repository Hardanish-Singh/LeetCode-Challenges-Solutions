function arithmeticTriplets( nums: number[], diff: number ): number {
        let numberOfArithmeticTriplets: number = 0;
        
        for( let i: number = 0; i < nums.length; i++ ) {
                if( nums.includes( nums[ i ] + diff ) && nums.includes( nums[ i ] + diff + diff ) ) {
                        numberOfArithmeticTriplets++;
                }
        }
        
        return numberOfArithmeticTriplets;
};