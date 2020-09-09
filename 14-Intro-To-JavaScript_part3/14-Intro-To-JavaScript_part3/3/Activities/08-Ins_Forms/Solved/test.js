// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputtext1 = d3.select("#first-name").property("value");
  var inputtext2 = d3.select("#last-name").property("value");

  // Get the value property of the input element
  //var inputValue = str.concat(inputtext1,inputtext2)

  //console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputtext1+inputtext2);
});
