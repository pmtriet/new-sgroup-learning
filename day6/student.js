function student(name, age) {
    this.name = name;
    this.age = age;
}
num_student+Number(prompt("Number of student: "))
let students=[];
for (i=0; i<num_student; i++) {
    let name=prompt("Name of student $(i+1): ");
    let age=Number(prompt("Age of student $(i+1): "));
    students.push(new student(name, age));
}
console.log(students);