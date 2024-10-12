-- Leetcode: https://leetcode.com/problems/human-traffic-of-stadium/

WITH CTE AS (
        SELECT 
                *, 
                COUNT(*) OVER( ORDER BY id RANGE BETWEEN CURRENT ROW AND 2 FOLLOWING ) following_cnt,
                COUNT(*) OVER( ORDER BY id RANGE BETWEEN 2 PRECEDING AND CURRENT ROW ) preceding_cnt,
                COUNT(*) OVER( ORDER BY id RANGE BETWEEN 1 PRECEDING AND 1 FOLLOWING ) current_cnt
        FROM 
                stadium
        WHERE people >= 100
)
SELECT 
        id, 
        visit_date, 
        people
FROM 
        CTE
WHERE 
        following_cnt = 3 
OR 
        preceding_cnt = 3 
OR 
        current_cnt = 3
ORDER BY visit_date;