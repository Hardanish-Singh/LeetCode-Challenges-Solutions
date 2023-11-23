// Leetcode: https://leetcode.com/problems/plus-one-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var plusOne = function (head) {
    let number = "";
    while (head != null) {
        number += head.val;
        head = head.next;
    }
    head = null;
    let tail = null;
    number = String(BigInt(number) + 1n);
    for (let num of number) {
        let node = new ListNode(num);
        if (head == null) {
            head = tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }
    return head;
};
