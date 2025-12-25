// Leetcode: https://leetcode.com/problems/check-if-object-instance-of-class

// The function checks if the object is an instance of the classFunction by comparing the prototype of the object with the prototype of the classFunction.

// Solution 1
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj == null || typeof classFunction !== "function") {
        return false;
    }

    // The function retrieves the prototype of the object. Every object in JavaScript has a prototype, which represents the object it inherits properties and methods from.
    let prototype = Object.getPrototypeOf(obj);

    while (prototype) {
        if (prototype === classFunction.prototype) {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype); // Move to the next prototype in the chain
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

// Solution 2
var checkIfInstanceOf = function (obj, classFunction) {
    while (obj != null) {
        if (obj.constructor === classFunction) {
            return true;
        }
        // The function retrieves the prototype of the object. Every object in JavaScript has a prototype, which represents the object it inherits properties and methods from.
        obj = Object.getPrototypeOf(obj);
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

// Solution 3
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj == null || typeof classFunction !== "function") return false;
    return Object(obj) instanceof classFunction;
};
