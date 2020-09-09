var movieScores=[
    4.4,
    3.3,
    5.9,
    8.8,
    1.2,
    5.2,
    7.4,
    7.5,
    7.2,
    9.7,
    4.2,
    6.9 
];
// storing a rating count
var count=0;
//array to hold movie scores
var goodMovies=[];
var okMovies=[];
var badMovies=[];
for (var i=0;i<movieScores.length;i++){
  var score=movieScores[i];
  if(score >7) {
    goodMovies.push(score);
  }
  else if (score <=7 && score >5) {
    okMovies.push(score);
  }
  else {
    badMovies.push(score);
  }

}
var numGoodMovies=goodMovies.length;
var numOkMovies=okMovies.length;
var numBaddMovies=badMovies.length;
console.log("-----------");
console.log(`there are ${numGoodMovies} good movies`);
console.log(`there are ${numGoodMovies} good movies`);

