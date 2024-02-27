let arr = [1, 3, 4, 8];

// function calArea(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(Math.PI * arr[i] * arr[i]);
//     }
//     return result;
// }
// console.log("area", calArea(arr));

// function calcircum(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(2 * Math.PI * arr[i]);
//     }
//     return result;
// }
// console.log("circum", calArea(arr));

let area = function (radius) {
    return Math.PI * radius * radius;
};

let circumference = function (radius) {
    return 2 * Math.PI * radius;
};


let diameter = function (radius){
    return radius * 2;
}


let calculate = function (rediusArr, operation) {
    let output = [];
    for(let i=0; i<rediusArr.length; i++){
        output.push(operation(rediusArr[i]))
    }

    return output;
};

// console.log(calculate(arr, circumference))
// console.log(calculate(arr, area))
// console.log(calculate(arr, diameter))


// let dia = arr.map((num) => num*2)
// console.log(dia);

//  write custom map for calculate operations;

Array.prototype.customMap = function (operation) {
    let output = [];
    for(let i=0; i<this.length; i++){
        output.push(operation(this[i]))
    }
    
    return output;
};

let result = arr.customMap((idx) => 5*idx)

console.log(result);




