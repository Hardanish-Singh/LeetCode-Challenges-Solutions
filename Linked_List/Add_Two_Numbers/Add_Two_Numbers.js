// Leetcode: https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
        let node = new ListNode();
        let current = node;
        let carry = 0;
        let remainder = 0;

        while (l1 != null || l2 != null || carry > 0) {
                let val1 = l1?.val ?? 0;
                let val2 = l2?.val ?? 0;

                let total = val1 + val2 + carry;
                carry = Math.floor(total / 10);
                remainder = Math.floor(total % 10);
                current.next = new ListNode(remainder);
                current = current.next;

                l1 = l1?.next ?? null;
                l2 = l2?.next ?? null;
        }

        return node.next;
};