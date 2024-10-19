-- https://leetcode.com/problems/second-degree-follower/

SELECT 
    followee AS follower,
    COUNT(DISTINCT follower) AS num
FROM 
    follow
GROUP BY followee
HAVING followee IN (
                        SELECT 
                                follower 
                        FROM 
                                follow
                        ORDER BY followee
                   )
ORDER BY followee