We will consider each day and see how many possible "states" do we have for each day and then find "choices" corresponding to each state.

Let's talk about the constraints first: <br />
        1) Sell must be after Buy.<br />
        2) Buy must be after Sell.<br />
        3) Limit on the number of transaction(k), k>0.<br />


For each day we have three choices: <br />
        1) Buy.<br />
        2) Sell.<br />
        3) Rest. Which further has two states. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;a) Rest after buy. Here we are holding the stock. We are not selling or buying. We are just resting. ( Best Time to Buy and Sell Stocks with Cooldown ) <br />
        &nbsp;&nbsp;&nbsp;&nbsp;b) Rest after selling. Here we are not holding any stocks. We are not selling or buying. We are just resting. ( Best Time to Buy and Sell Stocks with Transactional fee )