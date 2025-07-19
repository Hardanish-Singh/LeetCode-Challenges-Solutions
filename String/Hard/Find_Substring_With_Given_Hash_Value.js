// Leetcode: https://leetcode.com/problems/find-substring-with-given-hash-value/

/**
 * @param {string} s
 * @param {number} power
 * @param {number} modulo
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */
const subStrHash = (s, p, m, k, hashValue) => {
    p = BigInt(p);
    m = BigInt(m);
    hashValue = BigInt(hashValue);
    let tmp = BigInt(0);
    let result = 0;
    let pk = BigInt(1);
    let n = s.length;

    for (let i = n - 1; i >= 0; i--) {
        tmp = (tmp * p + BigInt(s[i].charCodeAt() - 96)) % m;
        if (i + k >= n) {
            pk = (pk * p) % m;
        } else {
            tmp = (tmp - ((BigInt(s[i + k].charCodeAt() - 96) * pk) % m) + m) % m;
        }
        if (tmp === hashValue) {
            result = i;
        }
    }
    return s.slice(result, result + k);
};
