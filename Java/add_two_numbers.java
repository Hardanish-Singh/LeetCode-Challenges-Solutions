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
        
        public ListNode addTwoNodes( ListNode node1, ListNode node2, ListNode result ) {        
                int remaining = 0;
                int remainder = 0;
                int vals1 = 0;

                while( node1 != null ) {
                        try{
                                vals1 = node2.val;
                        }
                        catch( Exception e ) {
                                vals1 = 0;
                        }
                        if( node1.val + vals1 + remaining > 9 ) {
                                remainder = ( node1.val + vals1 + remaining ) % 10;
                                result = new ListNode( remainder, result );
                                remaining = ( node1.val + vals1 + remaining ) / 10;
                        }
                        else {
                                result = new ListNode( node1.val + vals1 + remaining, result );
                                remaining = 0;
                        }
                        node1 = node1.next;
                        try {
                                node2 = node2.next;
                        }
                        catch( Exception e ) {

                        }
                }

                if(remaining > 0) {
                        result = new ListNode( remaining, result );
                        remaining = 0;
                }

                return result;
        }

        public ListNode addTwoNumbers( ListNode l1, ListNode l2 ) {
                ListNode l3 = null;
                ListNode l4 = null;
                
                l3 = l1;
                l4 = l2;
                
                short count1 = 0;
                short count2 = 0;
        
                while( l1 != null ) {
                        count1++;
                        l1 = l1.next;
                }
                
                while( l2 != null ) {
                        count2++;
                        l2 = l2.next;
                }
                
                ListNode l5 = null;
        
                if( count1 >= count2 ) {
                        l5 = addTwoNodes( l3, l4, l5);
                } 
                else {
                        l5 = addTwoNodes( l4, l3, l5);
                }
        
                ListNode reversedList = null;
                
                while( l5 != null ) {
                        reversedList = new ListNode( l5.val, reversedList );
                        l5 = l5.next;
                }
                
                return reversedList;
        }
}

