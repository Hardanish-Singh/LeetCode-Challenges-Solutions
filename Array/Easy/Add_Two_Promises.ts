type P = Promise<number>;

// Solution 1
var addTwoPromises = async (promise1: P, promise2: P): P => {
    // Wait for both promises to resolve and retrieve their values
    const [value1, value2] = await Promise.all([promise1, promise2]);
    // Return a new promise that resolves with the sum of the values
    return value1 + value2;
};

// Solution 2
var addTwoPromises = (promise1: P, promise2: P): P =>
    Promise.all([promise1, promise2]).then(([num1, num2]) => num1 + num2);

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
