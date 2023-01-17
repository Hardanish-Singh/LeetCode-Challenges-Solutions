// Leetcode: https://leetcode.com/problems/lru-cache/

/*
         THIS SOLUTION USES HASHMAP & DOUBLY LINKED LIST FOR ITS IMPLEMENTATION
                1) HASHMAP for O(1) get operation
                2) DOUBLY LINKED LIST FOR O(1) put operation
*/

import java.util.HashMap;

class Node
{
        private int key;
        private int value;
        private Node next;
        private Node previous;
        
        public Node( int key, int value )
        {
                this.key = key;
                this.value = value;
        }
        
        public int getKey() 
        {
                return key;
        }
        
        public int getValue() 
        {
                return value;
        }

        public Node getNextNode()
        {
                return next;
        }
        
        public Node getPreviousNode()
        {
                return previous;
        }
        
        public void setNextNode( Node next )
        {
                this.next = next;
        }
        
        public void setPreviousNode( Node previous )
        {
                this.previous = previous;
        }
        
        public void setNextAndPreviousNode( Node node )
        {
                this.next.previous = node;
        }
        
        public void setPreviousAndNextNode( Node node )
        {
                this.previous.next = node;
        }
}

class LRUCache 
{
        
        private int capacity;
        private Node head = null;
        private Node tail = null;
        // HashMap is a key-value pair of Keys as "Key Number" & Value as "Node Address"
        private HashMap<Integer, Node> map = null;
        
        public LRUCache( int capacity ) 
        {
                // Initialize Capacity
                this.capacity = capacity;
                // Initialize Doubly Linked List
                head = new Node( 0, 0 );
                tail = new Node( 0, 0 );
                head.setNextNode( tail );
                tail.setPreviousNode( head );
                head.setPreviousNode( null );
                tail.setNextNode( null );
                // Initialize HashMap
                map = new HashMap<Integer, Node>();
        }

        public int get( int key ) 
        {
                if( map.containsKey( key ) )
                {
                        Node node = map.get( key );
                        delete( node );
                        insert( node );
                        return node.getValue();
                }
                else
                {
                        return -1;
                }
        }

        public void put( int key, int value ) 
        {
                if( map.containsKey( key ) )
                {
                        // Remove the Node from the Doubly Linked List
                        Node node = map.get( key );
                        delete( node );
                }
                if( map.size() == capacity )
                {
                        // Remove the Node before Tail Node from the Doubly Linked List
                        Node node = map.get( tail.getPreviousNode().getKey() );
                        delete( node );
                }
                Node node = new Node( key, value );
                insert( node );
        }
        
        public void insert( Node node )
        {
                // Add the key in HashMap
                map.put( node.getKey(), node );
                // Add the node at the first position always
                node.setNextNode( head.getNextNode() );
                node.setNextAndPreviousNode( node );
                head.setNextNode( node );
                node.setPreviousNode( head );
        }

        public void delete( Node node )
        {
                // Remove the key from the HashMap
                map.remove( node.getKey() );
                // Remove the node from the Doubly Linked List
                node.setPreviousAndNextNode( node.getNextNode() );
                node.setNextAndPreviousNode( node.getPreviousNode() );
        }

}