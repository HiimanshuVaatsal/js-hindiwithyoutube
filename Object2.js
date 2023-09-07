// const tinderUser=new Object(); Singleton object 
// console.log(tinderUser);

const tinderUser={}

 tinderUser.id='12abc'
tinderUser.name='sammy'
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:'vatsal@gmail.com',
    fullname:{
        userfname:{
            firstname:'hiimanshuk',
            lastname:'vatsal'
        }
    }
}

// console.log(regularUser.fullname.userfname.firstname);

//how to combine tow object

const obj1={
    1:'a',
    2:'b',
    3:'c'
}

const obj2={
    4:'d',
    5:'e',
    6:'f'
}

//const obj3={obj1,obj2}
// Approach1 using assign method
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);


//Approach2 using spread operator 

// const obj3={...obj1,...obj2};
// console.log(obj3);


//here oject in array how to print 

const users = [
  {
    id: 1,
    email: "nqgamil.com",
  },
  {
    id: 2,
    email: "nqgamil.com",
  },
  {
    id: 3,
    email: "nqgamil.com",
  },
];

// console.log(users[0].email);

console.log(tinderUser);

// console.log(Object.keys(tinderUser)); here we find the key of object
// console.log(Object.values(tinderUser)); here we find the value of object

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

