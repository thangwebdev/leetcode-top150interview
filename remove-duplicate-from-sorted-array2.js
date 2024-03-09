const array = [0, 0, 1, 1, 1, 1, 2, 3, 3];

const removeDuplicates = function (nums) {
  let occurrences = 0;
  let currentValue = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current === currentValue) {
      if (occurrences <= 1) {
        ++occurrences;
      } else {
        nums.splice(i, 1);
        --i;
      }
    } else {
      occurrences = 1;
      currentValue = current;
    }
  }
  return nums.length;
};

const k = removeDuplicates(array);
console.log({ array, k });
