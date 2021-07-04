/****************************************************************
 *             LEETCODE REVERSE LINKED LIST CHALLENGE           *
 *                                                              *
 * Problem Statement                                            *
 * Given the head of a singly linked list, reverse the list,	*
 * and return the reversed list.      				*
 *                                                              *
 * Examples                                                     *
 * Input 1: head = [1,2,3,4,5]                                  *
 * Output 1: [5,4,3,2,1]                                        *
 *                                                              *
 * Input 2: head = [1,2]                                        *
 * Output 2: [2,1]                                              *
 *								*
 * Input 3: head = []	                                        *
 * Output 3: []        	                                        *
 *                                                              *
 * Constraints							*
 * 1) The number of nodes in the list is the range [0, 5000].	*
 * 2) -5000 <= Node.val <= 5000					*
 *								*
 ***************************************************************/

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
