// Leetcode: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;

    // Variables Definition
    let head = null;
    let tail = null;
    let node = null;

    const parseList1 = () => {
        node = new ListNode(list1.val);
        list1 = list1.next;
    };

    const parseList2 = () => {
        node = new ListNode(list2.val);
        list2 = list2.next;
    };

    const addToLinkedList = () => {
        if (head == null) {
            head = tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    };

    // Loop until any of the list becomes null
    while (list1 && list2) (list1.val < list2.val ? parseList1() : parseList2(), addToLinkedList());

    // Add all the nodes of list1, if remaining
    while (list1) (parseList1(), addToLinkedList());

    // Add all the nodes of list2, if remaining
    while (list2) (parseList2(), addToLinkedList());

    return head;
};
