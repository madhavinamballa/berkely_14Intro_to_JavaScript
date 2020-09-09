var tbody=d3.select("tbody");
data.forEach(function(weather){
    console.log(weather);
    var row=tbody.append('tr');
    Object.entries(weather).forEach(function([key,value]){
        var cell=row.append("td");
        cell.text(value);
    });  
});
