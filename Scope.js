// var c=100

// {
//     var c=30;
//     let a=10;
//     const b=20;

// }

// console.log(a); // a is not define;
// console.log(b);// b is not define;
// console.log(c);// c is not define;



//nested scope

function one(){
    const username='Himanshuk'

    function two(){
        const webiste='youtube'
        console.log(username);

    }
    // console.log(website);

    // two();
}

// one();



// if else nested function

if(true){
    const username='Himanshuk'
    if(username==='Himanshuk'){
        const website='youtube'
        console.log(username+website); //Himanshukyoutube;
    }
    // console.log(website); error
}

// console.log(username); error



//++++++++++++++++++++++Question++++++++++++++++++++++++++

function addOne(num){
  return num+1;
}

// addOne(3); here value return but not print


const addTwo=function(num){
    return num+2;
}

addTwo(3);