var movie={
    name:"start wars",
    year: 1997,
    profitable: true,
    sequels: [5,6,1,2,3,"The Last jedi"]

};
console.log(movie.name);
console.log(movie.year);
console.log(movie.profitable);
console.log(movie.sequels);
console.log(movie["name"]);
movie.rating=8.5;
console.log(movie);
delete movie.sequels;
console.log(movie);
if ("rating" in movie){
    console.log("This movie has a rating!");
}
console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(Object.entries(movie))
