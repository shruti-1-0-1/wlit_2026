function checkPositive(n){
    if(n>0){
        console.log(n + " is positive");
    }
    else if (n ==0){
        console.log(n + " is Zero");
    }
    else{
        console.log(n + " is negative")
    }
}

//Using ternary operator and arrow function
const checkPositive2 = (n)=>{
   console.log(n>0?" The number is positive": "The number is negative")
}

checkPositive(20)
checkPositive2(-50)