/*
    The Numbers table keeps the value of number and its frequency.

    +----------+-------------+
    |  Number  |  Frequency  |
    +----------+-------------|
    |  0       |  7          |
    |  1       |  1          |
    |  2       |  3          |
    |  3       |  1          |
    +----------+-------------+
    
    In this table, the numbers are 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, so the median is (0 + 0) / 2 = 0.

    +--------+
    | median |
    +--------|
    | 0.0000 |
    +--------+
    
    Write a query to find the median of all numbers and name the result as median.
*/
SELECT 
    SUM(median) AS median 
FROM 
(
    select case when vals = 1 and MOD(vals2,2) = 0 then sum(number*2)/2 
                when vals > 1 and MOD(vals2,2) = 0 then sum(number)/2
                else sum(number) 
           end as median
    from
    (
        SELECT 
            *,
            CASE WHEN vals1 >= (CASE WHEN MOD(x.vals2,2) = 0 THEN x.vals2/2 ELSE CEIL(x.vals2/2) END) AND vals1-frequency < (CASE WHEN MOD(x.vals2,2) = 0 THEN x.vals2/2+1 ELSE CEIL(x.vals2/2) END)
                                THEN   @rn := @rn + 1
                 ELSE 
                      0
            END AS vals
        FROM 
        (
            SELECT 
                n1.*,
                SUM(n1.frequency) OVER (ORDER BY number ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS vals1,
               ( SELECT SUM(frequency) AS vals2 FROM numbers) AS vals2,
               ( SELECT @rn := 0 ) AS rn
            FROM 
                numbers n1
        ) AS x
    )AS xx
    where vals >=1
    group by vals
) AS xxx