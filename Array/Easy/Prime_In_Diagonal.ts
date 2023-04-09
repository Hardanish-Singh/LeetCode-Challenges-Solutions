const isPrime = (num: number): boolean => {
        if (num <= 1) {
                return true;
        }
        let flag: boolean = false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                        flag = true;
                        break;
                }
        }
        return flag;
};

const diagonalPrime = (nums: number[][]): number => {
        let diagonalNumbers = new Set<number>();
        let maxPrime: number = 0;
        for (let i: number = 0; i < nums.length; i++) {
                diagonalNumbers.add(nums[i][i]);
                diagonalNumbers.add(nums[i][nums.length - i - 1]);
        }
        for (const diagonalNumber of diagonalNumbers) {
                if (!isPrime(diagonalNumber)) {
                        if (diagonalNumber > maxPrime) {
                                maxPrime = diagonalNumber;
                        }
                }
        }
        return maxPrime;
};
