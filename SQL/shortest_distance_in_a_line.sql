/*
        SQL Schema
                Table point holds the x coordinate of some points on x-axis in a plane, which are all integers.
        
        Write a query to find the shortest distance between two points in these points.

        |  x  |
        |-----|
        | -1  |
        |  0  |
        |  2  |
        
        The shortest distance is '1' obviously, which is from point '-1' to '0'. So the output is as below:

        | shortest|
        |---------|
        |    1    |
        

        Note: Every point is unique, which means there is no duplicates in table point.
        
        Follow-up: What if all these points have an id and are arranged from the left most to the right most of x axis?
*/
SELECT 
    MIN( distance ) AS shortest
FROM 
(
    SELECT
        ABS( x1-x2 ) AS distance
    FROM
    (
        SELECT
            x AS x1,
            LAG( x, 1 ) OVER ( ) AS x2
        FROM
            point
    )AS SubQuery1
)AS SubQuery2