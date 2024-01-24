let arr1 = [1,2,3];
let arr2 = [4,5,6];

function mergeArray(arr1, arr2) {
  let arr3 = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    arr3.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr3.push(arr2[j]);
    j++;
  }

  console.log(arr3);
}

mergeArray(arr1, arr2);
