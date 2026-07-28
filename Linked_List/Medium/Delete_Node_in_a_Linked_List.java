// Leetcode: https://leetcode.com/problems/delete-node-in-a-linked-list/

/*
        // Definition for Singly-Linked List
        public class ListNode
	{
                int val;
                ListNode next;
                public ListNode()
                {
                }
                public ListNode( int val )
                {
                        this.val = val;
                }
                public ListNode( int val, ListNode next )
                {
                        this.val = val;
                        this.next = next;
                }
        }
*/

class Solution 
{
        public void deleteNode(ListNode node) 
        {
                node.val = node.next.val;
                node.next = node.next.next;
        }
}