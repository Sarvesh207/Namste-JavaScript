// console.log("Namste");

// setTimeout(function () {
//   console.log("Javascript");
// }, 5000);

// console.log("Season 2 ");

// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function () {
//   proceedToPayment(orderId);
// }); // create order

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber);
      } else {
        reject("Promise rejected");
      }
    }, 2000);
  });
  
  // Handling the Promise
  myPromise
    .then((result) => {
      console.log("Promise fulfilled with value: " + result);
    })
    .catch((error) => {
      console.log("Promise rejected with error: " + error);
    });
  

