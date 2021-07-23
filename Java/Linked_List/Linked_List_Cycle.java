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
