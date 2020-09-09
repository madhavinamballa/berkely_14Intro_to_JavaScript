// The new student and grade to add to the table
//var newGrade = ["Wash", 79];

// Use D3 to select the table
var table=d3.select("table");
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped

// Use D3 to select the table body
var tbody=d3.select("tbody");
// Append one table row `tr` to the table body

// Append one cell for the student name

// Append one cell for the student grade
var grades = [['max',80],['min',90],['jam',78]]
grades.forEach(([student,grade])=> {
    var row=tbody.append("tr");
    row.append('td').text(student);
    row.append('td').text(grade);


});