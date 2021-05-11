SELECT 
    MIN(distance) AS shortest
FROM 
(
    SELECT
        ABS( x1-x2 ) AS distance
    FROM
    (
        SELECT
            x AS x1,
            LAG(x, 1) OVER ( ) AS x2
        FROM
            point
    )AS SubQuery1
)AS SubQuery2