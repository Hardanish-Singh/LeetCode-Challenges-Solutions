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
                ListNode prev = null;
                ListNode curr = head;

                while(curr != null && curr.next != null)
                {
                        if(curr.val == curr.next.val)
                        {
                                while(curr.next != null && curr.val == curr.next.val)
                                {
                                        curr = curr.next;
                                }
                                curr = curr.next;
                                if(prev == null)
                                {
                                        head = curr;
                                }
                                else
                                {
                                        prev.next = curr;
                                }
                        }
                        else
                        {
                                //UPDATE PREVIOUS & CURRENT NODE
                                prev = curr;
                                curr = curr.next;
                        }
                }

                return head;
        }
}