// Leetcode: https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

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
        public ListNode swapNodes( ListNode head, int k ) 
        {
                ListNode first = null;
                ListNode last = null;
                ListNode current = head;
                int length = 0;
                int count = 0;
                
                while( current != null ) 
                {
                        length++;
                        if( length == k )
                        {
                                first = current;
                        }
                        current = current.next;        
                }
                
                current = head;
                while( current != null ) 
                {
                        if( count == ( length - k ) )
                        {
                                last = current;
                                break;
                        }
                        count++;
                        current = current.next;  
                }
                
                // SWAP VALUES OF TWO NODES
                int temp = first.val;
                first.val = last.val;
                last.val = temp;
                
                return head;
        }
}