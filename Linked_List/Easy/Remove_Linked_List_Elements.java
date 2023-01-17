// Leetcode: https://leetcode.com/problems/remove-linked-list-elements/

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
        public ListNode removeElements( ListNode head, int val ) 
        {       
                if( head == null )
                {
                        return head;
                }
                
                ListNode current = head;
                ListNode previous = null;
                
                // SOLUTION 1
                while( current.next != null )
                {
                        if( current.val == val )
                        {
                                // IF HEAD NODE ITSELF HOLDS THE KEY
                                // OR MULTIPLE OCCURRENCES OF KEY
                                if( previous == null )
                                {
                                        // CHECKS IF THE CURRENT NODE/POINTER KEY EXISTS MULTIPLE TIMES
                                        while( current.val == val )
                                        {
                                                if( current.next == null )
                                                {
                                                        break;
                                                }
                                                current = current.next;
                                        }
                                        head = current;
                                        if( head.val == val && head.next == null )
                                        {
                                                return null;
                                        }
                                        if( head.next == null )
                                        {
                                                return head;
                                        }
                                }
                                // CHECKS IF THE CURRENT NODE/POINTER KEY MATCHES THE NEXT NODE/POINTER KEY
                                // OR MULTIPLE OCCURRENCES OF KEY
                                else if( current.next.val == val )
                                {
                                        // CHECKS IF THE CURRENT NODE/POINTER KEY EXISTS MULTIPLE TIMES
                                        while( current.next.val == val )
                                        {
                                                current = current.next;
                                                if( current.next == null )
                                                {
                                                        // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                                                        previous.next = current.next;
                                                        return head;
                                                }
                                        }
                                        // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                                        previous.next = current.next;
                                }
                                else
                                {
                                        // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                                        previous.next = current.next;
                                }
                        }
                        previous = current;
                        current = current.next;
                }
                if( current.val == val)
                {
                        //HEAD NODE HAS ONLY ONE NODE
                        if( previous == null )
                        {
                                return null;
                        }
                        // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                        previous.next = current.next;
                }
                return head;
        }
}

// SOLUTION 2
class Solution 
{
        public ListNode removeElements( ListNode head, int val ) 
        {
                if( head == null )
                {
                        return head;
                }
                
                ListNode current = head;
                ListNode previous = null;

                while( current != null )
                {
                        if( current.val == val )
                        {
                                // IF HEAD NODE ITSELF HOLDS THE KEY
                                if( current == head )
                                {
                                        head = current.next;
                                }
                                // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                                else
                                {
                                        previous.next = current.next;
                                }
                                current = current.next;
                        }
                        else
                        {
                                previous = current;
                                current = current.next;
                        }
                }
                return head;
        }
}