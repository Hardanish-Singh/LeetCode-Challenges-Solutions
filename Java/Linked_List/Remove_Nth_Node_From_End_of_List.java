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

import java.util.NoSuchElementException;

class Solution
{
	public ListNode removeNthFromEnd( ListNode head, int n )
	{
		// IF HEAD IS NULL / HEAD DOES NOT EXISTS
		if( head == null )
                {
                        throw new NoSuchElementException();
                }
		// IF THERE IS ONLY ONE SINGLE NODE IN THE LINKED LIST
		if( head.next == null )
		{
			head = null;
			return head;
		}
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

		current = head;
		int index = 1;
		previous = null;
		while( current != null )
		{
			if( n == 1 )
			{
				previous = current;
				current = current.next;
				previous.next = null;
				previous = current;
				head = previous;
				break;
			}
			if( index + 1 == n )
			{
				previous = current;
			}
			else if( index == n )
			{
				previous.next = current.next;
				current.next = null;
				break;
			}
			current = current.next;
			index++;
		}

		previous = head;
	        current = head.next;
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
}
