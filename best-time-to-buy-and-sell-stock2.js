const array = [7, 6, 4, 3, 1];

// minValue = 1
// profit = 4
// total profit = 0

const maxProfit = function (prices) {
  let totalProfit = 0;
  let minValue = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > minValue) {
      const currentProfit = prices[i] - minValue;
      if (currentProfit > profit) {
        profit = currentProfit;
      } else {
        totalProfit += profit;
        profit = 0;
        minValue = prices[i];
      }
      if (i === prices.length - 1) {
        totalProfit += profit;
      }
    } else {
      totalProfit += profit;
      profit = 0;
      minValue = prices[i];
    }
  }
  return totalProfit;
};
const totalProfit = maxProfit(array);
console.log(totalProfit);
