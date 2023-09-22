//First promise create

const PromiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Execute");
        resolve();
    },1000);
});

PromiseOne.then(function(){
    // console.log('Promises is consumed');
})


// How to create the promises in Approach 2

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Create the promises");
        resolve();
    },1000)
}).then(function(){
    // console.log("Consumesion of promises");
})


// 3rd approach of creatin promises here pass a value like object , array etc. in the resolve function

const Promisethird = new Promise(function(resolve, reject){
    setTimeout(()=>{
    //   console.log("create the promises");
      resolve({username:"Himanshuk", age:24, course:'MCA'});
    },2000)
})

Promisethird.then((user)=>{
    // console.log(user.username);
    // console.log(user.age);
    // console.log(user.course);
})



// 4th type promises how to avoid promises hall

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({usrename:'HV',password:'124'})
//         }else{
//             reject("Error:Something went wrong");
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//    console.log(user);
//    return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejected"));



// 5th promises

// const promiseFive =new Promise(function(resolve,reject){
//     setTimeout (function(){
//         let error = true;
//         if(!error){
//             resolve({username:'Himanshuk',age:30,email:"himanshu@gamil.com"});
//         }else{
//             reject('Error:Js went wrong');
//         }

//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response=await promiseFive
//         console.log(response)
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();

//how to api fetch

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//    }catch(error){
//     console.log("E:",error);
//    }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((resopnse)=>{
    return resopnse.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})