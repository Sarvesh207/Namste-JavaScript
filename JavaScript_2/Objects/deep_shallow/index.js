let originalValue = {
    name:"john",
    age:3
}

let copiedvalue = originalValue

console.log(originalValue)
console.log(copiedvalue)

copiedvalue.name = "peter"

console.log(originalValue)
console.log(copiedvalue)

// 1)  assign oprator create shallow copy
// 2)  