//what is callback function in js

// pass a function to anothr fun 



/**
 * js is synchronus single threaded langaue
 * 
 * why callback => means we are givinng the responsibality of that function to another function
 */

setTimeout(function(){
    console.log("hii");
},5000)

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("x");
})