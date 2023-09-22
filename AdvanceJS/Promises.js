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
      console.log("create the promises");
      resolve();
    },2000)
})

Promisethird.then(()=>{
    console.log("caputer the promises");
})