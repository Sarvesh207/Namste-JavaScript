let a = 100;
{
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(c);
console.log(a);
console.log(b);