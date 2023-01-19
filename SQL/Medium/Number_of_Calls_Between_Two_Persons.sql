-- Leetcode: https://leetcode.com/problems/number-of-calls-between-two-persons/

WITH users AS
(
        SELECT
                from_id AS person1,
                to_id AS person2,
                duration AS duration
        FROM
                calls
        
        UNION ALL
        
        SELECT
                to_id AS person1,
                from_id AS person2,
                duration AS duration
        FROM
                calls
)

SELECT 
        person1,
        person2,
        COUNT(*) AS call_count,
        SUM(duration) AS total_duration
FROM
        users
WHERE
        person1 < person2
GROUP BY 
        person1,
        person2;