// const arr = [5, 1, 4, 2, 6];

function double(x) {
    return 2 * x;
}

function triple(x) {
    return 3 * x;
}

// const doubleArr = arr.map( (x)=>  {
//     return x.toString(2);
// });
// console.log(doubleArr);


// filter
// const odd=  arr.filter(x => x%2 !== 0);
// console.log(odd);

// reduce

const array = [5,1,3,3,6];

function sum(arr){
    let result = 0;

    for(let i=0; i<arr.length; i++){
        result += arr[i]; 
    }

    return result
}

//  same this we can do this with reduce

const sum_Array = array.reduce((acc, curr)=> {
    return acc += curr;
},0)


//  find max element

function maxElement(arr){
    let max = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}
console.log(maxElement(array));

const maxEle = array.reduce((max, curr) => {
    if(max < curr){
        max = curr;
    }

    return max;
})

console.log(maxEle);

