let obj = {
  name: "sarvesh",
  company: "CRED",
  display: function () {
    console.log(this.name, "woeks in ", this.company);
  },
};

obj.display();

let obj2 = {
    name: "devesh",
    company: "Zomato",
    display: () =>  {
      console.log(this.name, "woeks in ", this.company);
    },
  };

  obj2.display();

  let obj3 = {
    name: "devesh",
    company: "Zomato",
    display: () =>  {
      setTimeout(() => {
        console.log(this.name, "woeks in ", this.company)
      },3000)
    },
  };

 obj3.display() 