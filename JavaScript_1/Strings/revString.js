// "blue is sky the"
// "the sky is blue"





function revString(str){
   
    let arrString = str.split(" ")
 
    let lo = 0;
    let hi = arrString.length-1
 
    while(lo < hi){
         
       let temp = arrString[lo]
       arrString[lo] = arrString[hi]
       arrString[hi] = temp
 
       lo++
       hi--
    }
 
   return arrString.join(" ")
 }
 
 let str = "blue is sky the"
 
 console.log(revString(str));
  
//  using bulidIn method

let arrString = str.split(" ").reverse().join(" ")
console.log(arrString);