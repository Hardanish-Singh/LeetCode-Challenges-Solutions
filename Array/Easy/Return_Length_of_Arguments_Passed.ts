// Leetcode: https://leetcode.com/problems/return-length-of-arguments-passed/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

const argumentsLength = (...args: JSONValue[]): number => args.length;
