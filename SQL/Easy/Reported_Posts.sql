-- Leetcode: https://leetcode.com/problems/reported-posts/

SELECT
        extra AS report_reason,
        COUNT( DISTINCT post_id ) as report_count
FROM
        Actions
WHERE action_date BETWEEN DATE( '2019-07-05' - INTERVAL 1 DAY ) AND DATE('2019-07-05')
AND action = 'report'
AND extra IS NOT NULL
GROUP BY extra 