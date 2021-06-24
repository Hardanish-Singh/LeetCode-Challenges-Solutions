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
	public ListNode mergeTwoLists( ListNode l1, ListNode l2 )
	{

        	ListNode head = null;
        	ListNode tail = null;

		while( l1 != null )
		{
			ListNode node = new ListNode( l1.val );
			if( head == null )
			{
			    head = tail = node;
			}
			else
			{
			    tail.next = node;
			    tail = node;
			}
			l1 = l1.next;
		}

		while( l2 != null )
		{
			ListNode node = new ListNode( l2.val );
			if( head == null )
			{
			    head = tail = node;
			}
			else
			{
			    tail.next = node;
			    tail = node;
			}
			l2 = l2.next;
		}

		ListNode current = head;
		ListNode next = null;
		int temp = 0;

		while( current != null )
		{
			next = current.next;
			while( next != null )
			{
				if( current.val > next.val )
				{
					temp = current.val;
					current.val = next.val;
					next.val = temp;
				}
				next = next.next;
			}
			current = current.next;
		}

		return head;

	}
}
