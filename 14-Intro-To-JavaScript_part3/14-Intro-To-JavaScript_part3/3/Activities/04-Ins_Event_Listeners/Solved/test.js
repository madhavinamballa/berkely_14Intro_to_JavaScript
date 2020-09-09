var button=d3.select("#click-me");
var inputfield=d3.select("input-field")
button.on("click",function(){
    console.log("hi, iam pinched");
    //console.log(d3.event.target);
    d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
    console.log(test);
});
inputfield.on("change",function(){
    var newText=d3.select.taget.value;
    console.log(newText);

});
