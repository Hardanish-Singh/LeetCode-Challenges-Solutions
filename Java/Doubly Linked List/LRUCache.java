/*
        Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

        Implement the LRUCache class:

        LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
        int get(int key) Return the value of the key if the key exists, otherwise return -1.
        void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
        The functions get and put must each run in O(1) average time complexity.

        Example 1:
                Input
                ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
                [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
        Output
                [null, null, null, 1, null, -1, null, -1, 3, 4]

        Explanation
                LRUCache lRUCache = new LRUCache(2);
                lRUCache.put(1, 1); // cache is {1=1}
                lRUCache.put(2, 2); // cache is {1=1, 2=2}
                lRUCache.get(1);    // return 1
                lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
                lRUCache.get(2);    // returns -1 (not found)
                lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
                lRUCache.get(1);    // return -1 (not found)
                lRUCache.get(3);    // return 3
                lRUCache.get(4);    // return 4
*/


import java.util.HashMap;

class Node
{
        int key;
        int value;
        Node next;
        Node prev;
        
        Node( int key, int value )
        {
                this.key = key;
                this.value = value;
        }

}

class LRUCache 
{

        int capacity = 0;
        Node head = null;
        Node tail = null;
        HashMap<Integer, Node> map = null;

        public LRUCache( int capacity ) 
        {
                this.capacity = capacity;
                
                head = new Node( 0, 0 );
                tail = new Node( 0, 0 );
                head.next = tail;
                tail.prev = head;
                head.prev = null;
                tail.next = null;
                
                map = new HashMap<Integer, Node>();
        }

        public int get( int key ) 
        {
                if( map.containsKey( key ) ) 
                {
                        Node node = map.get( key );
                        delete(node);
                        insert( node );
                        return node.value;
                }
                else
                {
                        return -1;
                }
        }
        /*
                Update the value of the key if the key exists. 
                Otherwise, add the key-value pair to the cache
        */
        public void put( int key, int value ) 
        {
                if( map.containsKey( key ) )
                {
                        Node node = map.get( key );
                        delete(node);
                }
                if( map.size() == capacity )
                {
                       Node node = map.get(tail.prev.key);
                       delete(node);
                }
                Node node = new Node( key, value );
                insert( node );
        }

        public void insert( Node node )
        {
                //INSERT TO KEY & NODE TO HASHMAP
                map.put( node.key, node );

                //INSERT THE NODE AT THE FRONT OF DOUBLY LINKED LIST
                node.next = head.next;
                node.next.prev = node;
                
                head.next = node;
                node.prev = head;
        }

        public void delete( Node node )
        {
                //REMOVE THE KEY & NODE FROM HASHMAP 
                map.remove(node.key);
                //REMOVE THE NODE IN THE DOUBLY LINKED LIST
                node.prev.next = node.next;
                node.next.prev = node.prev; 
        }

}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
*/