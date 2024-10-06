-- Leetcode: https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/

SELECT
    COALESCE
    (
        ROUND
        (
            ( SELECT COUNT(DISTINCT requester_id, accepter_id) AS requester_id FROM RequestAccepted )
            /
            ( SELECT COUNT(DISTINCT sender_id, send_to_id) AS sender_id FROM FriendRequest)
        ,2
        )
    ,0.00)
AS accept_rate