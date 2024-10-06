-- Leetcode: https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/

-- Solution 1
SELECT 
    id, 
    COUNT(id) AS num
FROM
(
    SELECT
        requester_id as id
    FROM
        RequestAccepted
    UNION ALL
    SELECT
        accepter_id as id
    FROM
        RequestAccepted
)AS x
GROUP BY x.id
ORDER BY num DESC
LIMIT 1

-- Solution 2
WITH CTE AS (
        SELECT requester_id, accepter_id FROM RequestAccepted
        UNION
        SELECT accepter_id, requester_id FROM RequestAccepted
    )
SELECT requester_id AS id, COUNT(accepter_id) AS num
FROM CTE
GROUP BY 1
ORDER BY 2 DESC
LIMIT 1;