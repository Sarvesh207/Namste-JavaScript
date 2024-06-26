const promiseOne = new Promise(function (resolve, reject) {
    //  do an async task  
    // db calls , crypotograpy, network call

    setTimeout(() => {
      console.log("Async task is compleated")
      resolve();
    },3000)
})

promiseOne.then(function() {
    console.log("promise is consumed")
})

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("async task 2 is completed")
        resolve()
    })
}).then(function() {
    console.log("async task  2 is completed")
    
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({name:"sarvesh",role:"frontend developer"})
    })
})

promiseThree.then(function(obj) {
    console.log(obj)
    return obj.name;
}).then(function(res){
    console.log(res)
})


const promiseFour = new Promise(function(resolve, reject) {
        let flag = true;
        if(!flag){
            resolve({name:"sarveh", role:"frontend"})
        } else {
            reject("ERROR: Something went worong")
        }
})

promiseFour
.then(function(user) {
    console.log(user);
    return user.name
})
.then(function(name) {
    console.log(name)
})
.catch(function(err) {
    console.log(err);
}) 
.finally(function(){
    console.log("This finally wil run regardless of either promise will resolve or reject")
})


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let flag  = false;

        if(flag){
            resolve({name:'sarvesh'})
        } else {
            reject("ERROR: Something went wrong")
        }
    },1000)
})

async function asyncHandler() {
    try {
        const user = await promiseFive;
        
        console.log(user)
    } catch (error) {
        console.log("Error ",error)
    }
}

asyncHandler()


let success = false;

function getUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success){
                resolve([
                    {username:"user1"},
                    {username:"user2"}
                ])
            } else {
                reject("user did not find")
            }
        },3000)
    })
}

const promise = getUsers();

function onSuccess(user){
    console.log(user)
}

function onError(error){
    console.log(error)
}

promise.then(onSuccess, onError)


