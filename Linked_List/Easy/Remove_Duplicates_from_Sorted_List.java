// Leetcode: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

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
        public ListNode deleteDuplicates(ListNode head)
        {
                if( head == null )
                {
                        return null;
                }

                ListNode previous = head;
                ListNode current = head.next;

                while( current != null )
                {
                        ListNode next = current.next;

                        if( previous.val == current.val )
                        {
                                //REMOVE THE LINK
                                previous.next = next;
                                current.next = null;
                                //UPDATE CURRENT NODE
                                current = next;
                        }
                        else
                        {
                                //UPDATE PREVIOUS & CURRENT NODE
                                previous = current;
                                current = current.next;
                        }
                }

                return head;
        }
}
