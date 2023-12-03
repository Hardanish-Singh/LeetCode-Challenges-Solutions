// https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

const reverseBetween = (head, left, right) => {
        if (head == null || left >= right) {
                return head;
        }

        let current = head;
        let leftBefore = head;
        let index = 1;
        while (index < left) {
                leftBefore = current;
                current = current.next;
                index++;
        }

        let tail = current;
        let previous = null;
        // Reverse the Linked List between left & right pointer
        while (index >= left && index <= right) {
                const next = current.next;
                current.next = previous;
                previous = current;
                current = next;
                index++;
        }

        leftBefore.next = previous;
        tail.next = current;

        return left > 1 ? head : previous;
};