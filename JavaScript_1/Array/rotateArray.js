let arr = [1, 2, 3, 4, 5, 6, 7]

let key = 2;

// Output: 3 4 5 6 7 1 2

function rotate(arr, sIdx, eIdx){
    while(sIdx < eIdx){
        let temp = arr[sIdx];
        arr[sIdx] = arr[eIdx]
        arr[eIdx] = temp
        sIdx++;
        eIdx++;
    }
}

rotate(arr,0, key-1 )

console.log(arr);