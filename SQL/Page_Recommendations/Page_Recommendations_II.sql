-- Leetcode: https://leetcode.com/problems/page-recommendations-ii/

WITH FriendsCTE1 ( ids ) AS -- This will gather all the ids ( both user1_id, user2_id ) from the frienship table
(
        SELECT user1_id FROM friendship
        UNION ALL
        SELECT user2_id FROM friendship
), FriendsCTE2 AS
(
        SELECT
                user2_id AS combined_users_1,
                user1_id AS combined_users_2
        FROM
                friendship
        WHERE user1_id IN ( SELECT ids FROM FriendsCTE1 ORDER BY ids )

        UNION ALL

        SELECT
                user1_id AS combined_users_1,
                user2_id AS combined_users_2
        FROM
                friendship
        WHERE user2_id IN ( SELECT ids FROM FriendsCTE1 ORDER BY ids )
)

SELECT
        FriendsCTE2.combined_users_2 AS user_id,
        likes1.page_id,
        COUNT( likes1.page_id ) AS friends_likes
FROM
        FriendsCTE2
LEFT JOIN likes AS likes1 ON likes1.user_id = FriendsCTE2.combined_users_1
LEFT JOIN likes AS likes2 ON likes2.user_id = FriendsCTE2.combined_users_2 AND likes2.page_id = likes1.page_id

WHERE likes2.page_id IS NULL

GROUP BY FriendsCTE2.combined_users_2, likes1.page_id
ORDER BY FriendsCTE2.combined_users_2;