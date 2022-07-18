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
                
                double count = 1;
                while( head != null )
                {
                        if( count == middle ) 
                        {
                                break;
                        }
                        head = head.next;
                        count++;
                }
                
                return head;
        }
}