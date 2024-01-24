const arr = [5, 1, 3, 2, 6];

//double - [10, 2, 6, 4, 12]

//tripal - [10, 2, 6, 4, 12]

// function double(x){
//     return 2 * x;
// }

// function tripal(x){
//     return 3 * x;
// }
// const output = arr.map(binary)

// function binary(x) {
//     return x.toString(2)
// }

// console.log(output);

function isEven(x) {
  return x % 2 === 0;
}
// const output = arr.filter(isEven)

// console.log(output)

// const output = arr.filter((x) => x < 4)

// console.log(output)

//reduce

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// console.log(findSum(arr));

const output = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(output);

// find max value

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// console.log(findMax(arr));

const output2 = arr.reduce((max, curr) => {
    if(max < curr){
        max = curr
    }
    return max ;
},0 )

// console.log(output2);

const users = [
    {firstName:"akshay", lastName:"Roy", age:26},
    {firstName:"donald", lastName:"trump", age:75},
    {firstName:"elon", lastName:"musk", age:50},
    {firstName:"shivani", lastName:"sharma", age:26},
]

//  list of ful names 

const fullName = users.map((x) => x.firstName + " " + x.lastName)

// console.log(fullName);

// return array of ages

const arrayAge = users.reduce((user, curr) => {
     user.push(curr.age)

     return user;
},[] )

console.log(arrayAge);

const newObj = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else {
        acc[curr.age] = 1;
    }

    return acc;
}, {})

// console.log(newObj);

const firstNames = users.filter((user) => user.age < 30).map((user) => user.firstName)

// console.log(firstNames);

const FirstNameArray1 = users.reduce((acc, curr) => {
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc;
},[])

console.log(FirstNameArray1); // [ 'akshay', 'shivani' ]



// const FirstNameArray = users.reduce((acc, curr) => {
//     if (curr.age < 30) {
//         acc[curr.firstName] = curr.age;
//     }
//     return acc;
// }, {});

// console.log(FirstNameArray);
