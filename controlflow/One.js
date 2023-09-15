// if statement
// const isUserloggedIn=true;
// if(isUserloggedIn){
//   console.log(`This is execu`)
// }else{
//     console.log(`if condtion is false`)
// }


// const temp=42
// if(temp<50){
//     console.log(`less than 50`);
// }else{
//     console.log('greater than 50');
// }




// const balance=1000;

// if(balance < 500){
//     console.log(`less than 500`);
// }else if(balance<750){
//     console.log('less than 700');
// }else if(balance <900){
//     console.log('less then 900')
// }else{
//     console.log('less than 1200')
// }


const userloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userloggedIn && debitCard){
    console.log('allow to buy course');
}else{
    console.log('does not allow to buy course ');
}


if(loggedInFromEmail || loggedInFromGoogle){
    console.log('easy to login ');
}
