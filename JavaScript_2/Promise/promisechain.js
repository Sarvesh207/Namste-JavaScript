// function getUser(userId){
//     return new Promise((resolve, reject) => {
//         console.log("get the user from database")
//         setTimeout(() => {
//             resolve({user:"user1", userId})
//         },1000)
//     })
// }

// function getServices(services){
//     return new Promise((resolve, reject) => {
//         console.log("services that user are using")
//         setTimeout(() => {
//             resolve(['email', 'vpn', 'dns'])
//         },2000)
//     })
// }

// function getServicesCoast(services){
//     return new Promise((resolve, reject) => {
//         console.log("services that user are using")
//         setTimeout(() => {
//             resolve(`services coast ${services.length*100}`)
//         },2000)
//     })
// }

// getUser(100).then(getServices).then(getServicesCoast).then(console.log)

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise one is fullfilled");

//     resolve("Promise one is fullfilled");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise two is fullfilled");

//     resolve("Promise two is fullfilled");
//   }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise threee is fullfilled");

//     resolve("Promise three is fullfilled");
//   }, 3000);
// });

// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise four is not fullfilled");
//     reject("Error");
//   }, 4000);
// });

// Promise.all([p1, p2, p3, p4])
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

function fetchDummy(taskname, time, needToReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (needToReject) {
        reject("Rejected", taskname);
      } else {
        resolve(taskname);
      }
    }, time);
  });
}

const task1 = fetchDummy("Task1", 1000, true);
const task2 = fetchDummy("Task2", 2000);
const task3 = fetchDummy("Task3", 3000);
const task4 = fetchDummy("Task4", 4000);


//  Promise.all  
// Promise.all([task1, task2, task3, task4])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//   Promiser.allSeattled

// Promise.allSettled([task1, task2, task3, task4])
//   .then((res) => {
//     console.log(res)
//   })
// .catch((err) => {
//     console.log(err)
// })



//  Promise.race

// Promise.race([task1, task2,task3, task4])
// .then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


// Promise.any


Promise.any([task1, task2, task3, task4])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})

