// Leetcode: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

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
                ListNode previous = null;
                ListNode current = head;

                while(current != null && current.next != null)
                {
                        if(current.val == current.next.val)
                        {
                                while(current.next != null && current.val == current.next.val)
                                {
                                        current = current.next;
                                }
                                current = current.next;
                                if(previous == null)
                                {
                                        head = current;
                                }
                                else
                                {
                                        previous.next = current;
                                }
                        }
                        else
                        {
                                //UPDATE PREVIOUSIOUS & CURRENTENT NODE
                                previous = current;
                                current = current.next;
                        }
                }

                return head;
        }
}