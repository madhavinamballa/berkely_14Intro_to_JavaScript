function reversestr(str){
    return str.split("").reverse().join("");
}
var output=d3.select(".output");
var text=d3.select("#text");
function handleEvent(event){
    var input=d3.event.target.value;
    var revinput=reversestr(input);
    output.text(revinput);

}
text.on("change",handleEvent);