// Randomly select an episode number for Star Wars
var text=d3.select("#text");
var output=d3.select(".output");


var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);
var upvote=d3.select(".upvote");
var downvote=d3.select(".downvote");
var counter=d3.select(".counter");
upvote.on("click",function()){
  var currentCount=parseInt(counter.text());
  currentCount+=1;
  counter.text(currentCount);
  data.push(['upvote',currentCount]);
});
downvote.on("click",function()){
  var currentCount=parseInt(counter.text());
  currentCount+=1;
  counter.text(currentCount);
  data.push(['downvote',currentCount]);
});

// Select the upvote and downvote buttons

// Select the counter h1 element

// Use D3 `.on` to attach a click handler for the upvote

// Use d3 `.on` to attach a click handler for the downvote
