const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

// let similarElm = array1.filter((element) => array2.includes(element));

// console.log(similarElm);

let similarElement = array1.filter((ele) => {
  return array2.includes(ele)
})

console.log(similarElement);
// using for of

// let silmi = [];

// for (const ele of array1) {
//   if (array2.includes(ele)){
//     silmi.push(ele);
//   } 
// }

// console.log(silmi);
