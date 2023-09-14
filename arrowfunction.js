const user={
    username:'Himanshuk',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); here output full object;
    }
}

// user.welcomeMessage()

// user.username='sam'

// user.welcomeMessage()

// console.log(this)  here output empty object but browser m goble object window object because 

// function chai(){
//     const username='hi'
//     // console.log(this.username);output here undefined this keyword does not work with function , It works only object
// }

// chai();


//arrowfunction

// const chai=()=>{
//     let username='hi'
//     console.log(this.username);// output undefined
    //    console.log(this); output {} empty object 
// }

// chai()



// const addTwo=(num1,num2)=>{ this bracket with return keyword use
//     return num1+num2 //explicit return 
// } simple arrow function


//implecit return arrow function;
// const addTwo=(num1,num2)=>num1+num2;
// const addTwo=(num1,num2)=>(num1+num2);//when () use then no return keyword
// const addTwo=(num1,num2)=>({username:'hitesh'});  here we implecit return object;

// console.log(addTwo(4,5)


