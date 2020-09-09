function wordCount(myString){
    var stringArray=myString.split(" ");
    var wordFrequency={};
    for(var i=0;i<stringArray.length,i++){
        var currentWord=stringArray[i];
        if (currentWord in wordFrequency){
            wordFrequency[currentWord]+=1;
        }
        else {
            wordFrequency[currentWord]=1;
        }

    }
    console.log(wordFrequency);
    return wordFrequency;
}
wordCount("ma madhavi namballa manoj namballa");