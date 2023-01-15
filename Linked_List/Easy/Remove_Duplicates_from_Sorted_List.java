/*
	Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

	Example 1:
		Input: 1 → 1 → 2
		Output: 1 → 2
	Example 2:
		Input: 1 → 1 → 2 → 3 → 3
		Output: 1 → 2 → 3

	Constraints:
		1) The number of nodes in the list is in the range [0, 300].
		2) -100 <= Node.val <= 100
		3) The list is guaranteed to be sorted in ascending order.
*/

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
        public ListNode deleteDuplicates(ListNode head)
        {
                if( head == null )
                {
                        return null;
                }

                ListNode previous = head;
                ListNode current = head.next;

                while( current != null )
                {
                        ListNode next = current.next;

                        if( previous.val == current.val )
                        {
                                //REMOVE THE LINK
                                previous.next = next;
                                current.next = null;
                                //UPDATE CURRENT NODE
                                current = next;
                        }
                        else
                        {
                                //UPDATE PREVIOUS & CURRENT NODE
                                previous = current;
                                current = current.next;
                        }
                }

                return head;
        }
}
