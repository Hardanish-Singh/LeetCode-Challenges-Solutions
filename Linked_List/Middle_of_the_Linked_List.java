class Solution 
{
        public ListNode middleNode(ListNode head) 
        {
                double middle = 0;
                ListNode current = head;
                        
                while( current != null )
                {
                        middle++;
                        current = current.next;
                }
                if( middle % 2 == 0 )
                {
                        middle++;
                }
                middle = Math.ceil( middle / 2 );
                
                double c = 1;
                while( head != null )
                {
                        if( c == middle ) 
                        {
                                break;
                        }
                        head = head.next;
                        c++;
                }
                
                return head;
        }
}