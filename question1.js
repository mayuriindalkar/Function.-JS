let user = require("readline-sync")
function add_numbers(num1,num2){
    sum=num1+num2
    console.log(sum)
}
num1 = user.questionInt("enter number")
num2 = user.questionInt("enter number")
add_numbers(num1,num2)