/**
 * Finds the maximum profit that can be obtained by buying and selling stocks.
 *
 * @param {number[]} prices - Array of daily stock prices.
 * @return {number} - Maximum profit.
 */
function maxProfit(prices) {
    // Check if the prices array is empty or has only one element
    if (prices.length < 2) {
        return 0; // Cannot make a profit with less than two prices
    }

    // Initialize variables to keep track of the minimum price and maximum profit
    let minPrice = prices[0];
    let maxProfit = 0;

    // Iterate through the prices array
    for (let i = 1; i < prices.length; i++) {
        // Update the minimum price if the current price is lower
        minPrice = Math.min(minPrice, prices[i]);

        // Calculate the potential profit if we sell at the current price
        const potentialProfit = prices[i] - minPrice;

        // Update the maximum profit if the potential profit is higher
        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}

// Example usage:
const stockPrices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(stockPrices);

console.log("Maximum Profit:", result);
