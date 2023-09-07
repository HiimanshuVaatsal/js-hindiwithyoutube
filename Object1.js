//Singleton

//Object Literals

//Declare symbol

const mySym=Symbol('Key1');

let user={
    name:'Himanshuk',
    age:'34',
    [mySym]:'mykey1',
    location:'Kashipur',
    email:'vatsalhimanshu338@gmail.com',
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]

}

// console.log(user.name);
// console.log(user.age);
// console.log(user['name']);
// console.log(user['age']);
// console.log(user[mySym]);
// how to use Symbol as a key of object
// console.log(user.lastLoginDays[0]);


// how to freez the object after this any changeg does not reflect;

// Object.freeze(user);
// user.email='O';
// console.log(user);

user.greeting=function(){
    console.log("Hello Js user");
}

console.log(user.greeting());

user.greetingTow=function(){
    console.log(`hello Js user: ${this.name}`);

}

console.log(user.greeting());