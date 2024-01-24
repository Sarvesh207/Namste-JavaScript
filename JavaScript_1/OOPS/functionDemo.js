function Product(n, p){
    this.name = n;
    this.price = p;
    return this
}

const p1 = new Product("iPhone", 10000)
console.log(p1);