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

        public ListNode addTwoNumbers( ListNode l1, ListNode l2 )
        {

		ListNode head = null;
		ListNode tail = null;
		ListNode node = null;
		short vals1 = 0;
                short vals2 = 0;
                short carry = 0;
                short remainder = 0;

                while( l1 != null || l2 != null )
                {
                        vals1 = (short) ( ( l1 == null ) ? 0 : l1.val );
                        vals2 = (short) ( ( l2 == null ) ? 0 : l2.val );
                        if( vals1 + vals2 + carry > 9 )
                        {
                                remainder = (short) ( ( vals1 + vals2 + carry ) % 10 );
				node = new ListNode( remainder );
                                carry = (short) ( ( vals1 + vals2 + carry ) / 10 );
                        }
                        else
                        {
				node = new ListNode( vals1 + vals2 + carry );
                                carry = 0;
                        }
			if( head == null )
			{
			    head = tail = node;
			}
			else
			{
			    tail.next = node;
			    tail = node;
			}
                        l1 = ( l1 != null ) ? l1.next : null;
                        l2 = ( l2 != null ) ? l2.next : null;
                }

                if( carry > 0 )
		{
			node = new ListNode( carry );
			tail.next = node;
			tail = node;
		}

		return head;

        }
}
