/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
*/
public class Solution {
        
        public ListNode addTwoNumbers( ListNode l1, ListNode l2 ) {
                
                ListNode result = null;
                short vals1 = 0;
                short vals2 = 0;
                short remaining = 0;
                short remainder = 0;
            
                while( l1 != null || l2 != null ) {
                        try {
                                vals1 = (short) l1.val;
                        }
                        catch( Exception e ) {
                                vals1 = 0;
                        }
                        try {
                                vals2 = (short) l2.val;
                        }
                        catch( Exception e ) {
                                vals2 = 0;
                        }
                        if( vals1 + vals2 + remaining > 9 ) {
                                remainder = (short) ( ( vals1 + vals2 + remaining ) % 10 );
                                result = new ListNode( remainder, result );
                                remaining = (short) ( ( vals1 + vals2 + remaining ) / 10 );
                        }
                        else {
                                result = new ListNode( vals1 + vals2 + remaining, result );
                                remaining = 0;
                        }
                        try {
                                l1 = l1.next;
                        }
                        catch( Exception e ) { }
                        try {
                                l2 = l2.next;
                        }
                        catch( Exception e ) { }
                }
                
                if( remaining > 0 ) {
                        result = new ListNode( remaining, result );
                        remaining = 0;
                }
                
                ListNode reversedList = null;
                
                while( result != null ) {
                        reversedList = new ListNode( result.val, reversedList );
                        result = result.next;
                }
                
                return reversedList;
            
        }
}

