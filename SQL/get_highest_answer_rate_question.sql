-- Leetcode: https://leetcode.com/problems/get-highest-answer-rate-question/

WITH CTE AS (
    SELECT
        question_id AS survey_log,
        ( SUM(action = 'answer') OVER (PARTITION BY question_id) ) / ( SUM(action = 'show') OVER (PARTITION BY question_id) ) AS ratio
    FROM SurveyLog
)
SELECT survey_log
FROM CTE
ORDER BY ratio DESC, survey_log ASC
LIMIT 1;
