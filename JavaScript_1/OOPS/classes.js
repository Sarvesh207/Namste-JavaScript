class Product {
  constructor(n, p) {
    //create new real life instence
    this.name = n;
    this.price = p;
  }
  
  //member
  displayProduct() {
    console.log(this.name, this.price, this.discount);
  }
  
}

// let iphone = new Product("iPhone 11", "60k");

// console.log(iphone);
// iphone.displayProduct();
