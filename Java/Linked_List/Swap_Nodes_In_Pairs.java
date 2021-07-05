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
	public ListNode swapPairs( ListNode head )
	{

		if( head == null )
		{
			return null;
		}

		if( head.next == null )
		{
			return head;
		}

		ListNode previous = head;
		ListNode current = head.next;
                ListNode next = null;
                head = current;

		while( true )
		{
			next = current.next;
                        if( previous == null || current == null || next == null )
			{
                                current.next = previous;
                                previous.next = null;
			        break;
			}
                        current.next = previous;
                        previous.next = next.next;
                        if( next.next == null )
                        {
                                previous.next = next;
                                break;
                        }
			previous = next;
			current = previous.next;
		}

		return head;
	}
}
