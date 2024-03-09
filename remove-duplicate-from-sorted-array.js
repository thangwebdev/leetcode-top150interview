const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = function (nums) {
  const setFromArray = new Set(nums);
  nums.splice(0, nums.length);
  nums.push(...Array.from(setFromArray));
  return nums.length;
};

const k = removeDuplicates(array);
console.log({ array, k });
