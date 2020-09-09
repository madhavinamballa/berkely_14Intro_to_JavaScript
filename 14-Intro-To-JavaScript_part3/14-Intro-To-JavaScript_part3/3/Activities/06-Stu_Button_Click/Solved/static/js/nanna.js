var text=d3.select(".star-wars").text()
var upvote=d3.select(".btn btn-default btn-lg upvote");
var downvote=d3.select(".btn btn-default btn-lg downvote");
var counter=d3.select(".counter");
upvote.on("click",function(){
    var currentcounter=parseInt(counter.text());
    currentcounter+=1;
    counter.text(currentcounter);
})
downvote.on("click",function(){
    var currentcounter=parseInt(counter.text());
    currentcounter-=1;
    counter.text(currentcounter);
})

