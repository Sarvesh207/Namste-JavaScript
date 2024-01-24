// let userDetail = {
//     name:"Sarvesh",
//     Age:23,
//     Designation:"Frontend Developer",
    
// }

// let printDetails = function (city) {
//     console.log(this.name + " " + this.Age +" "+city);
// }

// printDetails.call(userDetail, "Delhi")

// let userDetail2 = {
//     name:"Devesh",
//     Age:20,
//     Designation:"BackEnd Developer",
    
// }

// function borrowing with help of call
// userDetail.printDetails.call(userDetail2)

// printDetails.call(userDetail2,"Mumbai") // call

//Apply

// printDetails.call(userDetail,["Delhi", "India"]);

//Bind
// let newFun = printDetails.bind(userDetail2,"Mumbai")

// newFun();
// console.log(newFun);

// let user = {
//     name:"Sarvesh",
//     surname:"Gaynar",
//     age:23,
//     details: function(city) {
//         console.log(this.name +" "+this.surname+" "+this.age+" "+city);
//     }
// }


// user.details();

// let user2 = {
//     name:"Devesh",
//     surname:"Gaynar",
//     age:20
// }

// // call
// user.details.call(user2)

// // apply
// user.details.apply(user2,["Amravti"])

// // bind

// let newFun = user.details.bind(user2, "delhi")

// newFun();

let  name = {
    firstName:"Sarvesh",
    lastName:"Gaynar",

}

let printName = function () {
    console.log(this.firstName+" "+this.lastName);
}

let printMyName = printName.bind(name);
printMyName();