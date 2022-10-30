
select 
        user_id,
        sum(quantity*price) as spending
from Sales s

join Product p on s.product_id = p.product_id

group by user_id
order by spending desc