// https://leetcode.com/problems/reverse-linked-list-ii/
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
	public ListNode reverseBetween( ListNode head, int left, int right )
        {
                if( head == null )
		{
			return null;
		}

                if( left == right )
                {
                        return head;
                }

                ListNode beforeLinkingNode = head;
		ListNode afterLinkingNode;
		ListNode previous = null;
                ListNode current = null;
                short index = 1;

		while( index + 1 < left )
		{
                        beforeLinkingNode = beforeLinkingNode.next;
			index++;
		}

                previous = beforeLinkingNode;
                current = previous.next;
                afterLinkingNode = current;
		right -= index;

                while( right > 0 )
		{
                        ListNode next = current.next;
                        current.next = previous;
			previous = current;
			current = next;
			right--;
		}

                if( previous == afterLinkingNode || index == left )
                {
                        ListNode tail = head;
                        tail.next = current;
                        head = previous;
                }
                else
                {
                        beforeLinkingNode.next = previous;
                        afterLinkingNode.next = current;
                }

		return head;

        }
}
