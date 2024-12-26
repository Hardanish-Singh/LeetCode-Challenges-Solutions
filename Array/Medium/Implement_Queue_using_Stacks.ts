// Leetcode: https://leetcode.com/problems/implement-queue-using-stacks/
// @ts-nocheck

// Solution 1 (using Typescript classes)
class MyQueue {
    #myQueue: number[];
    constructor() {
        this.#myQueue = [];
    }

    push(x: number): void {
        this.#myQueue.push(x);
    }

    pop(): number {
        return this.#myQueue.shift();
    }

    peek(): number {
        return this.#myQueue[0];
    }

    empty(): boolean {
        return this.#myQueue.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Solution 2 (using Javascript prototypes)
var MyQueue = function () {
    this.myQueue = [];
};

MyQueue.prototype.push = function (x: number) {
    this.myQueue.push(x);
};

MyQueue.prototype.pop = function (): number {
    return this.myQueue.shift();
};

MyQueue.prototype.peek = function (): number {
    return this.myQueue[0];
};

MyQueue.prototype.empty = function (): boolean {
    return this.myQueue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
