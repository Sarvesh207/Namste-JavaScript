// let arr = [1, 2, 3, 4, 5, 6]

// arr.push(4) // push ele in last
// arr.pop();  // remove ele from last
// arr.shift() // remove ele from front
// arr.unshift(1)  // add from start
// console.log(arr);

// let newArr = arr.slice(1,3)
// console.log(newArr);


// let mid = Math.floor(scores.length/2)

// add remove 

// let left = scores.slice(0, mid)
// let right = scores.slice(mid)
// console.log(left);
// console.log(right);

// let deletedel = scores.splice(2,3)

// console.log(deletedel, scores);

// 
// let scores = [1, 2, 3, 4, 5];
// let marks = [5, 2, 11]

   
// let merge =  scores.concat(marks)
//    console.log(merge);

// seraching methos in array

let arr = ["sarvesh", "devesh", "kedar", "vidika"]



let n = arr.find((user) => user === "sarvesh")

// console.log(n);

let sortedArr = arr.sort((a,b) => a.localeCompare(b))
// console.log(sortedArr);

let arrStr = arr.join("")
console.log( typeof arrStr);



console.log("I love you".split(" "));

// console.log(arr.includes("sarvesh"));
// console.log(arr.indexOf("sarvesh"));
// console.log(arr.i("sarvesh"));

// find

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  let user = users.find(user => user.id === 1)

//   console.log(user);


