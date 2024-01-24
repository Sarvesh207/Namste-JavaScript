let students=["priyanshu","karan","vishal","piyush"]
let selectedStudents=["karan","priyanshu"]

let filteredStudent = students.filter((name) => {
    return selectedStudents.includes(name)
})

console.log(filteredStudent);

let code = filteredStudent.map((name) => {
    return name.toUpperCase().charAt(0)
}).join(" ");
console.log(code);

/**
 * let filteredStudent = students.filter((names) => {
    return selectedStudents.includes(names)
})

console.log(filteredStudent);

let code = filteredStudent.map((student) =>student.toLocaleUpperCase().charAt(0)).join("")

console.log(code);
 */