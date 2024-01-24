let arr = [1, 3, 4, 5]
let n = 5;

let sum = n*(n+1)/2



console.log(sum);

function find(arr){
    let sumOfArray = 0;
    for(let i=0; i<arr.length; i++){
        sumOfArray += arr[i]
    }

    return (sum - sumOfArray)
}

console.log(find(arr))