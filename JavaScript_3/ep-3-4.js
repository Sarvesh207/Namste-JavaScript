var x = 1;


a();
b();


console.log(x)


function a(){
    var x =  10; // local scope because of seperate execution context
    console.log(x);
}


function b(){
    var x = 100;
    console.log(x)
}