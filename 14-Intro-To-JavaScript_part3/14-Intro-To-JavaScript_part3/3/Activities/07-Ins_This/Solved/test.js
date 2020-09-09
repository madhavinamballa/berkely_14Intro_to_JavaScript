d3.selectAll("button").on("click",function(){
    console.log(this);
});
d3.selectAll("li").on("click",function(){
    var listitem=d3.select(this);
    listitem.style("color",'pink');
    console.log(listitem);
})
