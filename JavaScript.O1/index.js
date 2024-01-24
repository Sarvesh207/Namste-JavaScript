/**
 * Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
// Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

// Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8} 
// Output: arr3[] = {4, 5, 7, 8, 8, 9}
 */

function mergeArray(arr1, arr2){

    let arr3 = []

    let i = 0;
    let j = 0;
    let k = 0;
    while(i <= arr1.length && j <= arr2.length){
        if(arr1[i] < arr2[j]){
            arr3[k++] = arr1[i++]
        }else {
            arr3[k++] = arr2[j++]
        }
    }

    while(i < arr1.length){
        arr3[k++] = arr1[i++]
        
    }

    while(j < arr2.length){
        arr3[k++] = arr2[j++]
    }

    return arr3;
}



let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8]

console.log(mergeArray(arr1, arr2))