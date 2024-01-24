let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


function unique(strings){
    let result = [];
    for( const i of strings){
        if(!result.includes(i)){
            result.push(i)
        }
    }

    return result;
}
// function unique(strings){
//     let result = [];
//     for (const i of strings) {
//         if(!result.includes(i)){
//             result.push(i)
//         }
//     }

//     return result;
// }

console.log(unique(strings));