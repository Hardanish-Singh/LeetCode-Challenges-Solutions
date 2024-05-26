-- Leetcode: https://leetcode.com/problems/combine-two-tables/

-- Solution 1
SELECT
    Person.FirstName,
    Person.LastName,
    Address.City,
    Address.State
FROM
    Person

LEFT JOIN Address ON Address.PersonId = Person.PersonId;

-- Solution 2
SELECT
    Person.FirstName,
    Person.LastName,
    Address.City,
    Address.State
FROM
    Person

LEFT JOIN Address USING(PersonId)