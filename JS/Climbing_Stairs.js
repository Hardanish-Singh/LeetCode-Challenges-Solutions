function nCr(n, r) {
        return fact(n) / (fact(r) * fact(n - r));
}

// Returns factorial of n
function fact(n) {
        if (n == 0) return 1;
        var res = 1;
        for (var i = 2; i <= n; i++) res = res * i;
        return res;
}

function countInstances(string, word) {
        return string.split(word).length - 1;
}

var climbStairs = function (n) {
        let stairs = new Set();
        stairs.add("1".repeat(n));
        const iterator = stairs.values();
        let stair = iterator.next().value;
        let count = 0;

        while (stair !== undefined) {
                let temp = stair;
                let t1 = temp.slice(0, stair.lastIndexOf(2) + 1);
                for (let i = stair.lastIndexOf(2) + 1; i < stair.length - 1; i++) {
                        stairs.add(t1 + 2 + temp.slice(i + 2));
                        t1 += temp[i];
                        break;
                }
                stair = iterator.next().value;
        }

        stairs.forEach((element) => {
                let r = countInstances(element, 2);
                let n = element.length;
                count += nCr(n, r);
        });

        return count;
};
