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

select 
        person1,
        person2,
        count(*) as call_count,
        sum(duration) as total_duration
from
        users
where
        person1 < person2
group by 
        person1,
        person2
;