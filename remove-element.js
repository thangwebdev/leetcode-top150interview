const array = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const removeElement = function (nums, val) {
  const resArray = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
        resArray.push(nums[i])
    }
  }
  nums.splice(0, nums.length);
  nums.push(...resArray);
  return nums.length;
};
const k = removeElement(array, val);
console.log({ array, k });
