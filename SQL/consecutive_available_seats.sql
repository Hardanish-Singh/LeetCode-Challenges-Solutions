-- Leetcode: https://leetcode.com/problems/consecutive-available-seats/

-- Solution 1
SELECT 
  DISTINCT a.seat_id
FROM
    Cinema AS a, Cinema AS b
WHERE ABS(b.seat_id - a.seat_id) = 1 AND a.free AND b.free
ORDER BY 1;

-- Solution 2
WITH CinemaNeighbors AS (
        SELECT
                *,
                LAG(free) OVER( ORDER BY seat_id ) AS prev_free,
                LEAD(free) OVER( ORDER BY seat_id ) AS next_free
        FROM Cinema
)
SELECT 
        seat_id
FROM CinemaNeighbors
WHERE free = 1 AND (prev_free = 1 OR next_free = 1)
ORDER BY 1;

-- Solution 3
WITH CinemaNeighbors AS (
        SELECT
                *,
                SUM(free) OVER ( ORDER BY seat_id ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING ) AS count
        FROM Cinema
)
SELECT 
        seat_id
FROM CinemaNeighbors
WHERE free = 1 AND count > 1
ORDER BY 1;
