/*
	Given head, the head of a linked list, determine if the linked list has a cycle in it.

	There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
	Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

	Return true if there is a cycle in the linked list. Otherwise, return false.

	Example 1:
			3 ---> 2 ---> 0 ---> 4
			       ↑	     ↓
			       ↑ ← ← ← ← ← ← ↓
       Input: head = [3,2,0,-4], pos = 1
       Output: true
       Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
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
public class Solution
{
	public boolean hasCycle(ListNode head)
	{
		while( head != null )
		{
			if( head.val == -100002 )
			{
				return true;
			}
			else
			{
			        head.val = -100002;
			}
			head = head.next;
		}
		return false;
	}
}
