-- Leetcode: https://leetcode.com/problems/winning-candidate/

-- Solution 1
SELECT
    name
FROM
    candidate
JOIN
(
    SELECT CandidateId, COUNT(*) AS c FROM vote GROUP BY CandidateId  
)AS vote ON vote.CandidateId   = candidate.id
ORDER BY c DESC
LIMIT 1;

-- Solution 2
SELECT 
    name
FROM
    Candidate AS c
LEFT JOIN Vote AS v ON c.id = v.candidateId
GROUP BY c.id
ORDER BY COUNT(name) DESC
LIMIT 1;