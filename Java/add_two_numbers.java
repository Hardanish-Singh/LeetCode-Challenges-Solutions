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
                ListNode reversedList = null;
                short vals1 = 0;
                short vals2 = 0;
                short carry = 0;
                short remainder = 0;
            
                while( l1 != null || l2 != null ) {
                        vals1 = (short) ( ( l1 == null ) ? 0 : l1.val );
                        vals2 = (short) ( ( l2 == null ) ? 0 : l2.val );
                        if( vals1 + vals2 + carry > 9 ) {
                                remainder = (short) ( ( vals1 + vals2 + carry ) % 10 );
                                result = new ListNode( remainder, result );
                                carry = (short) ( ( vals1 + vals2 + carry ) / 10 );
                        }
                        else {
                                result = new ListNode( vals1 + vals2 + carry, result );
                                carry = 0;
                        }
                        l1 = ( l1 != null ) ? l1.next : null;
                        l2 = ( l2 != null ) ? l2.next : null;
                }
                
                result = ( carry > 0 ) ? new ListNode( carry, result ) :  result ;
                
                while( result != null ) {
                        reversedList = new ListNode( result.val, reversedList );
                        result = result.next;
                }
                
                return reversedList;
            
        }
}