const array = [2,2,1,1,1,2,2];

const majorityElement = function (nums) {
  const appears = Math.ceil(nums.length / 2);
  const elements = {};
  let result = 0;
  let item;
  for (let i = 0; i < nums.length; i++) {
    item = nums[i];
    if (elements[item]) {
      elements[item] += 1;
    } else {
      elements[item] = 1;
    }
    if (elements[item] >= appears) {
      result = item;
      break;
    }
  }
  return result;
};
const res = majorityElement(array);

console.log(res);
