function average(num1,num2,num3){
    console.log("sum of three number-",num1+num2+num3)
    console.log("average of three number-",(num1+num2+num3)/3)
}
user=require("readline-sync")
num1=user.questionInt("enter number:")
num2=user.questionInt("enter number:")
num3=user.questionInt("enter number:")
average(num1,num2,num3)