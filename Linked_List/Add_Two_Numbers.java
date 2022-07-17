// Leetcode: https://leetcode.com/problems/add-two-numbers/

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

        public ListNode addTwoNumbers( ListNode linkedList1, ListNode linkedList2 )
        {

		ListNode head = null;
		ListNode tail = null;
		ListNode node = null;
		int vals1 = 0;
                int vals2 = 0;
                int carry = 0;
                int remainder = 0;

                while( linkedList1 != null || linkedList2 != null )
                {
                        vals1 = linkedList1 == null ? 0 : linkedList1.val;
                        vals2 = linkedList2 == null ? 0 : linkedList2.val;
                        if( vals1 + vals2 + carry > 9 )
                        {
                                remainder = ( vals1 + vals2 + carry ) % 10;
				node = new ListNode( remainder );
                                carry = ( vals1 + vals2 + carry ) / 10;
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
                        linkedList1 = linkedList1 != null ? linkedList1.next : null;
                        linkedList2 = linkedList2 != null ? linkedList2.next : null;
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
