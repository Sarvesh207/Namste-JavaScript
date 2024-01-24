/**
 *  Input: prices = {1, 1, 0, 1, 1, 1}

    Output: 3
 */

let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1]

function missingConsecutive(arr){
    let count  = 0;
    let max = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === 1){
            count++;
            max = Math.max(max, count)
        }else if(arr[i] === 0){
            count = 0;
        }
    }

    return max;
}

console.log(missingConsecutive(arr));