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
		int value1 = 0;
                int value2 = 0;
                int carry = 0;
                int sum = 0;
                int remainder = 0;

                while( linkedList1 != null || linkedList2 != null || carry > 0 )
                {
                        value1 = linkedList1 == null ? 0 : linkedList1.val;
                        value2 = linkedList2 == null ? 0 : linkedList2.val;
                        sum = value1 + value2 + carry;
                        carry = 0;

                        if( sum > 9 )
                        {
                                remainder = sum % 10;
				node = new ListNode( remainder );
                                carry = sum / 10;
                        }
                        else
                        {
				node = new ListNode( sum );
                        }

			if( head == null && tail == null )
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

		return head;
        }
}