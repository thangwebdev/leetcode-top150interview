const array = [7, 6, 4, 3, 1];

const maxProfit = function (prices) {
  let maxProfit = 0;
  let minValue = prices[0];
  let currentProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] >= minValue) {
      currentProfit = prices[i] - minValue;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    } else {
      minValue = prices[i];
    }
  }
  return maxProfit;
};
const profitMax = maxProfit(array);
console.log(profitMax);
