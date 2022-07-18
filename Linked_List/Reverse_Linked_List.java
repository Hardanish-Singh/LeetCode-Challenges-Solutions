// Leetcode: https://leetcode.com/problems/reverse-linked-list/

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
        public ListNode reverseList( ListNode head )
        {

		if( head == null )
		{
			return null;
		}

		ListNode previous = head;
		ListNode current = head.next;
		ListNode tail = head;
		tail.next = null;

		while( current != null )
		{
			ListNode next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}

		head = previous;
		return head;

        }
}
