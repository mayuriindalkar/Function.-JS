function perfact(num){
    sum=0
    for(var i=1;i<num;i++){
        if(num%i === 0){
            sum+=i
        }
    }
    if (sum==num){
       console.log(num,"This is Perfact Number")
    }else{
        console.log(num,"This is Not Perfact Number")
    }
}
perfact(7)