// console.log("Hi")

//write one promise

const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promised 1 resolved");
    }, 5000);

    
})
const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promised 2 resolved");
    }, 10000);

    
})


// Handle promise using async and await

async function handlePromise(){
    console.log("first");

    const result = await p1;
    console.log(result);
    console.log("Namaste Javascript 1");
  
    
    const result2 = await p2;
    console.log(result2);
    console.log("Namaste Javascript 2");
    
   

}

handlePromise();

// handle promise using .then 

// function handlePromise(){
//     p1.then(((res) => console.log(res)))
//     console.log("Done2");
// }
// handlePromise();