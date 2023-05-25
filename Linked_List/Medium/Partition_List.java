// Leetcode: https://leetcode.com/problems/partition-list/

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
        public ListNode partition(ListNode head, int x) 
        {
                ListNode smallerHead = new ListNode(0);
                ListNode greaterHead = new ListNode(0);  
                ListNode smallerLast = smallerHead;
                ListNode greaterLast = greaterHead;

                while (head != null)
                {
                        if (head.val < x) 
                        {
                                smallerLast.next = head;
                                smallerLast = smallerLast.next;
                        }
                        else 
                        {
                                greaterLast.next = head;
                                greaterLast = greaterLast.next;
                        }
                        head = head.next;
                }

                greaterLast.next = null;          
                smallerLast.next = greaterHead.next;
                return smallerHead.next;
        }
}