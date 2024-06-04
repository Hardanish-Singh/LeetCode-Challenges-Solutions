-- Leetcode: https://leetcode.com/problems/page-recommendations/

SELECT
    DISTINCT Likes.page_id  AS recommended_page 
FROM
(
                SELECT
                        user2_id AS user_id
                FROM
                        Friendship
                WHERE user1_id = 1

                UNION

                SELECT
                        user1_id AS user_id
                FROM
                        Friendship
                WHERE user2_id = 1

)AS SubQuery
JOIN Likes ON Likes.user_id = SubQuery.user_id
WHERE  
        CASE WHEN Likes.page_id IN ( SELECT page_id FROM Likes WHERE user_id = 1 ) 
                THEN FALSE
                ELSE TRUE
        END