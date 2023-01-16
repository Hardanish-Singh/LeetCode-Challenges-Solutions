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
                        //UPDATE PREVIOUS & CURRENT NODE
                        if(curr.val != curr.next.val)
                        {
                                prev = curr;
                                curr = curr.next;
                        }
                        else
                        {
                                while(curr.next != null && curr.val == curr.next.val)
                                {
                                        curr = curr.next;
                                }
                                curr = curr.next;
                                if(prev != null)
                                {
                                        prev.next = curr;
                                }
                                else
                                {
                                        head = curr;
                                }
                        }
                }

                return head;
        }
}