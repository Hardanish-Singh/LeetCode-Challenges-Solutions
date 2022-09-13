We will consider each day and see how many possible "states" do we have for each day and then find "choices" corresponding to each state.

Let's talk about the constraints first:
        1) Sell must be after Buy.
        2) Buy must be after Sell.
        3) Limit on the number of transaction(k), k>0.


For each day we have three choices:
        1) Buy.
        2) Sell.
        3) Rest. Which further has two states.
                a. Rest after buy. Here we are holding the stock. We are not selling or buying. We are just resting. ( Best Time to Buy and Sell Stocks with Cooldown )
                b. Rest after selling. Here we are not holding any stocks. We are not selling or buying. We are just resting. ( Best Time to Buy and Sell Stocks with Transactional fee )