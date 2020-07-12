/*
    SQL Schema
        Given a Weather table, write a SQL query to find all dates' Ids with higher temperature compared to its previous (yesterday's) dates.

        +---------+------------------+------------------+
        | Id(INT) | RecordDate(DATE) | Temperature(INT) |
        +---------+------------------+------------------+
        |       1 |       2015-01-01 |               10 |
        |       2 |       2015-01-02 |               25 |
        |       3 |       2015-01-03 |               20 |
        |       4 |       2015-01-04 |               30 |
        +---------+------------------+------------------+
        For example, return the following Ids for the above Weather table:

        +----+
        | Id |
        +----+
        |  2 |
        |  4 |
        +----+
*/

SELECT w2.id 
FROM WEATHER AS w1
JOIN WEATHER AS w2 ON DATE_ADD(w1.RecordDate, INTERVAL 1 DAY) = DATE(w2.RecordDate) AND w2.Temperature > w1.Temperature
ORDER BY w1.RecordDate, w2.RecordDate