

let object = {
    name:"Sarvesh",
    city:"Yavatmal",
    getIntro:function () {
        console.log(this.name+" "+this.city);
    }
}

let object2 = {
    name:"Devesh",

}

object2.__proto__ = object