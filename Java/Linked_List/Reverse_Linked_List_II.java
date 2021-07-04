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
		// WHEN HEAD IS NULL/EMPTY THEN WE RETURN NULL
                if( head == null )
		{
			return null;
		}

		// WHEN LEFT & RIGHT POINTERS ARE EQUAL, THEN NO SWAPPING/REVERSING OF ELEMENTS IS NEEDED
                if( left == right )
                {
                        return head;
                }

                ListNode beforeLinkingNode = head;
		ListNode afterLinkingNode = null;
		ListNode previous = null;
                ListNode current = null;
		ListNode tail = null;
                short counter = 1;

		while( counter + 1 < left )
		{
                        beforeLinkingNode = beforeLinkingNode.next;
			counter++;
		}

                previous = beforeLinkingNode;
                current = previous.next;
                afterLinkingNode = current;
		right -= counter;

                while( right > 0 )
		{
                        ListNode next = current.next;
                        current.next = previous;
			previous = current;
			current = next;
			right--;
		}
		/*
			HERE TWO IMPORTANT CASES ARE COVERED
			CASE 1:
				head: [1, 2]
				left: 1
				right: 2
				WHEN AFTER REVERSING IN BETWEEN LEFT & RIGHT INDEX, IF previous == afterLinkingNode, THEN WE FOLLOW THE NORMAL REVERSING LOGIC
			CASE 2:
				head: [1, 2, 3]
				left: 1
				right: 3
				WHEN counter == left, HERE counter = 1 & left = 1, THEN WE FOLLOW THE NORMAL REVERSING LOGIC
		*/
                if( previous == afterLinkingNode || counter == left )
                {
                        tail = head;
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
