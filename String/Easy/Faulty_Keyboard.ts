// Leetcode: https://leetcode.com/problems/faulty-keyboard

const finalString = (s: string): string => {
    let stringOnLaptopScreen = "";

    for (let i = 0; i < s.length; i++) {
        s[i] === "i"
            ? (stringOnLaptopScreen = stringOnLaptopScreen.split("").reverse().join(""))
            : (stringOnLaptopScreen += s[i]);
    }

    return stringOnLaptopScreen;
};
