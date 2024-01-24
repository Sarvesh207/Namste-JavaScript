// function outest() {
//   function outer(b) {
    
//     function inner() {
//       console.log(a, b);
//     }
//     // let a = 10;
//     return inner;
//   }
//   return outer
// }
// let a = 100;
// let close = outest()("hello world");
// close();

function a(){
    var x = 10, z = 20
     return function b(){
        console.log(x);
    }

}

let y = a()
y()
