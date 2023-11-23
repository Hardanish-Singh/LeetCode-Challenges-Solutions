const plusOne = (digits: Array<number>): Array<number> =>
    String(BigInt(digits.join("")) + 1n)
        .split("")
        .map(Number);
