var isConfusingNumber = function (n) {
        var rotation = {
                0: "0",
                1: "1",
                6: "9",
                8: "8",
                9: "6",
        };
        var invalids = {
                2: true,
                3: true,
                4: true,
                5: true,
                7: true,
        };

        var s1 = String(n);
        var s2 = "";

        for (let i = s1.length - 1; i >= 0; i--) {
                if (invalids[s1[i]]) {
                        return false;
                } else {
                        s2 += rotation[s1[i]];
                }
        }

        return s1 !== s2 ? true : false;
};

var confusingNumberII = function (n) {
        // var count = 0;

        // for( let i = n; i >= 0; i-- ) {
        //     if (isConfusingNumber( i )) {
        //             count++;
        //         }
        // }

        // return count;

        let canRotateNumbers = ["0", "1", "6", "8", "9"];
        let stack = ["1", "9", "8", "6"];
        let count = 0;

        while (stack.length > 0) {
                let number = stack.pop();
                if (isConfusingNumber(number)) {
                        count++;
                }
                for (const k of canRotateNumbers) {
                        if (Number(number + k) <= n) {
                                stack.push(number + k);
                        }
                }
        }

        return count;
};
