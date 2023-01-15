// Leetcode: https://leetcode.com/problems/sort-list/

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

import java.util.Arrays;

// SOLUTION 1: BUBBLE SORT

class Solution 
{
        public ListNode sortList( ListNode head ) 
        {
                ListNode current = head;
                
                if (head == null) 
                {
                        return null;
                }

                while( current != null ) 
                {
                        ListNode next = current.next;
                        while( next != null ) 
                        {
                                if( current.val > next.val )
                                {
                                        swapNodes( current, next );
                                }
                                next = next.next;
                        }
                        current = current.next;
                }
                return head;
        }

        public void swapNodes( ListNode node1, ListNode node2 )
        {
                int temp = node1.val;
                node1.val = node2.val;
                node2.val = temp;
        }
}

// SOLUTION 2: USING ADDITIONAL DATA STRUCTURE ARRAY

class Solution 
{
        public ListNode sortList( ListNode head ) 
        {
                ListNode current = head;
                int count = 0;

                while( current != null )
                {
                        count++;
                        current = current.next;
                }

                int arr[] = new int[ count ];
                current = head;
                int i = 0;
            
                while( current != null )
                {
                        arr[i++] = current.val;
                        current = current.next;
                }
                Arrays.sort( arr );

                head = null;
                ListNode tail = null;

                for( i = 0; i < arr.length; i++ )
                {
                        ListNode node = new ListNode( arr[ i ] );
                        if( head == null && tail == null )
                        {
                                head = tail = node;
                        }
                        else
                        {
                                tail.next = node;
                                tail = node;
                        }
                }
                
                return head;
        }
}