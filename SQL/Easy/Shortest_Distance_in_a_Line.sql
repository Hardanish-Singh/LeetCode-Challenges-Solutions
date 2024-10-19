-- Leetcode: https://leetcode.com/problems/shortest-distance-in-a-line/

-- Solution 1
SELECT MIN(p2.x - p1.x) AS shortest
FROM Point AS p1
JOIN Point AS p2 ON p1.x < p2.x;

-- Solution 2
SELECT x - LAG(x) OVER (ORDER BY x) AS shortest
FROM Point
ORDER BY 1
LIMIT 1, 1;

-- Solution 3
SELECT MIN( distance ) AS shortest
FROM 
(
    SELECT ABS( x1-x2 ) AS distance
    FROM
    (
        SELECT
            x AS x1,
            LAG( x, 1 ) OVER ( ) AS x2
        FROM
            Point
    )AS SubQuery1
)AS SubQuery2