function check_number(num1,num2){
    if (num1%2===0 && num2%2===0){
        console.log(num1,num2,"Both are even")
    }else{
        console.log(num1,num2,"Both are not even")
    }
}
function check_number_list(list1,list2){
    for(var i=0;i<6;i++){
        check_number(list1[i],list2[i])
    }
}
check_number_list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])