const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

function unionOfArray(arr1, arr2){
    let union = [];
    let map = {}

    for( let item of  [...arr1, ...arr2]){
        if(!map[item]){
            union.push(item)
            map[item] = true;
        }
    }

    return union;
}

console.log(unionOfArray(arr1, arr2));