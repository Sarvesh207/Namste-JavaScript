let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(users) {
   let newObj =  users.reduce((acc, curr) => {
        acc[curr.id] = curr
        return acc
    },{})

    return newObj
}

let usersById = groupById(users);

console.log(usersById);
