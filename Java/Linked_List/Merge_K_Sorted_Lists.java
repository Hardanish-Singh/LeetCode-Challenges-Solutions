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
        public ListNode mergeKLists( ListNode[] lists )
        {
                ListNode k = null;
                ListNode head = null;
                ListNode tail = null;

                for( int i=0; i<lists.length; i++ )
                {
                        k = lists[i];
                        while( k != null )
                        {
                                ListNode node = new ListNode( k.val );
                                if( head == null )
                                {
                                    head = tail = node;
                                }
                                else
                                {
                                    tail.next = node;
                                    tail = node;
                                }
                                k = k.next;
                        }
                }

                // BUBBLE SORT
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
