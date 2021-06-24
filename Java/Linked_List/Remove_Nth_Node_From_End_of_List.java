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
	public ListNode reverse( ListNode head )
	{

		ListNode previous = head;
                ListNode current = head.next;
		ListNode tail = null;

		while( current != null )
		{
                        ListNode next = current.next;
                        current.next = previous;
                        previous = current;
                        current = next;
                }

		tail = head;
                tail.next = null;
                head = previous;

		return head;

	}

	public ListNode removeNthFromEnd( ListNode head, int n )
	{

		// IF HEAD IS NULL / HEAD DOES NOT EXISTS / IF THERE IS ONLY ONE SINGLE NODE IN THE LINKED LIST
		if( head == null || head.next == null )
                {
			head = null;
			return head;
                }

		ListNode current = null;
		ListNode previous = null;

		// REVERSE LINKED LIST
		head = reverse( head );

		// FIND THE ITEM & REMOVE IT FROM THE LINKED LIST
		current = head;
		previous = null;
		int index = 1;

		while( current != null )
		{
			if( index + 1 == n )
			{
				previous = current;
			}
			else if( index == n )
			{
				if( previous == null )
		                {
		                    previous = current;
		                    current = current.next;
		                    previous.next = null;
		                    previous = current;
		                    head = previous;
		                    break;
		                }
				previous.next = current.next;
				current.next = null;
				break;
			}
			current = current.next;
			index++;
		}

		// REVERSE THE LINKED LIST AGAIN
		head = reverse( head );
	        return head;

	}
}
