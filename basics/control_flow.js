// if else
const a=125
const b=235
if(a>b){
    console.log(a,"greater than b",b);
}
else{
    console.log(b,"b is greater than a",a);   
}
// if elseif else
if(a>b){
    console.log(a,"is greater than",b);
}
else if(a<b){
    console.log(b,"is greater than a",a);
    
}
else if(a==b){
   console.log(a,"is equal to",b);
   
}
else{
    console.log("Invalid Number");
    
}
// if
const userLoggedIn=true 
const debitCard=true
const googlelogged=true
const loggedInfromemail=true 
if(userLoggedIn==true && debitCard ==true){
    console.log("Allow to buy course"); 
}
if(googlelogged){
    console.log("LoggedIn");
}

// switch case
const month=2
switch(month){
    case 1:
    console.log("January");
    break;
    case 2:
    console.log("February");
    break;
    case 3:
    console.log("march");
    break;
        
}