// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr){
//     return arr.sort()
// }

// let sorted = copySorted(arr);
// console.log(sorted);

let arr1 = [5, 2, 1, -10, 8];

// let sorted2 = arr1.sort((a,b) => b - a)

// console.log(sorted2);

for(let i=0; i<arr1.length; i++){
    console.log(arr1.splice(i, 2));
}

console.log("Finaly array will look like ", arr1);

