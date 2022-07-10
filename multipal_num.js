function mulipleNumber(limit){
    var sum=0
    for(var i=0;i<=limit;i++){
        if(i%3==0){
            sum+=i
        }
        if(i%5==0){
            sum+=1
        }
    }
    console.log(sum)
}
mulipleNumber(10)