const array = [1, 2];
const k = 3;

const rotate = function (nums, k) {
  const length = nums.length;
  const numsClone = JSON.parse(JSON.stringify(nums));
  let sum, newIndex;
  if (k === length) {
    return;
  }
  for (let i = 0; i < length; i++) {
    sum = i + k;
    newIndex = sum % length;
    nums[newIndex] = numsClone[i];
  }
};
// var rotate = function(nums, k) {
//   const n = nums.length;
  
//   // If k is greater than array length, take its modulus
//   k %= n;

//   // Use splice to move the last k elements to the front
//   const rotatedPart = nums.splice(n - k, k);

//   // Concatenate the rotated part at the beginning of the array
//   nums.unshift(...rotatedPart);
// };

rotate(array, k);
console.log(array);
