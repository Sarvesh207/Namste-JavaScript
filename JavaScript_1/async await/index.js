// async function getData() {
//     return p;
//   }

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved ");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved ");
  }, 40000);
});

// const data = getData();

async function handlePromise() {
    console.log("Namte javaScript before promise");
    // JS Engine will wait for the promise to be resolved at line no 15 weather it take 10sec, 20sec it will only goes to next line 16 once promise is resolved 
    const val = await p1;
    console.log("Namte javaScript after promise 1 is resolved");
    console.log(val);

    const val2 = await p2;
    console.log("Namte javaScript after promise 2 is resolved");
    console.log(val2);
}

// handlePromise();

// function getData() {
    // Js Engine will not wait for promise to resolved 
//     p.then((res) => console.log(res));
//     console.log("Namste js");
// }
// getData();

// data.then((res) => console.log(res));
// console.log(data);

// Promises

async function handleAPI() {
  const data = await  fetch("https://api.github.com/users/Sarvesh207")
  console.log(data);
  const result = await data.json();
  console.log(result);
}

handleAPI();

