// Leetcode: https://leetcode.com/problems/implement-stack-using-queues/
// @ts-nocheck

// Solution 1 (using Typescript classes)
class MyStack {
    #myStack: number[];
    constructor() {
        this.#myStack = [];
    }

    push(x: number): void {
        this.#myStack.push(x);
    }

    pop(): number {
        return this.#myStack.pop();
    }

    top(): number {
        return this.#myStack[this.#myStack.length - 1];
    }

    empty(): boolean {
        return this.#myStack.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// Solution 2 (using prototypes)
var MyStack = function () {
    this.myStack = [];
};

MyStack.prototype.push = function (x: number) {
    this.myStack.push(x);
};

MyStack.prototype.pop = function (): number {
    return this.myStack.pop();
};

MyStack.prototype.top = function (): number {
    return this.myStack[this.myStack.length - 1];
};

MyStack.prototype.empty = function (): boolean {
    return this.myStack.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
