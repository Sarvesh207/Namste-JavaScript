const player1 = {
    firname:"virat",
    lastname:"kholi",
    numberToBat:3,
    canBowl:false,
    getDetails:function () {
        console.log(this.firname, this.lastname, "comes at no", this.numberToBat);
    }
}

// const obj = function () {
//     console.log(this.getDetails());
// }

// const x = obj.bind(player1)
// x();

const obj = function (x, y) {
    console.log(x + y);
    this.getDetails()
}

obj.call(player1, 2, 5);