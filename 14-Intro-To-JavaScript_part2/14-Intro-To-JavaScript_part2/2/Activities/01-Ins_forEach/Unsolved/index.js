// Array of student names
var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

// This function will be called for each element in the array
function printName(name) {
  console.log(name);
}
//loop through each student name and call the printName function
for (var i=0;i<students.length;i++){
  printNmae(students[i])
}
//forEach automatically iterates throug item and 
// calls the supplied function for that item
students.forEach(printName);
// you can also define anonymous function  inline
students.forEach(function(name){
  console.log(name);
})
