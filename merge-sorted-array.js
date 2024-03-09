const array1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const array2 = [2, 5, 6];
const n = 3;

const merge = function (nums1, m, nums2, n) {
  const nums1Sliced = nums1.slice(0, m);
  const nums2Sliced = nums2.slice(0, n);
  nums1.splice(0, nums1.length);
  nums1.push(...nums1Sliced, ...nums2Sliced);
  nums1.sort((a, b) => a - b);
};

merge(array1, m, array2, n);
console.log(array1);
