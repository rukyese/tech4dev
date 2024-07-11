function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
    
var students = [];
    
students.push(new Student("Jenny", "Laga", 5));
students.push(new Student("Timmy", "Turner", 8));
students.push(new Student("Carl", "Jr", 4));
    
var student = students[0];
    
for (var key in student) {
    console.log(student[key]);
}