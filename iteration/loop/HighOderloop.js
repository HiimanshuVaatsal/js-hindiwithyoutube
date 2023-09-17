// for of loop

const arr=[1,2,3,4,5]

for(const num of arr){
    // console.log(num);
    
}


const greetings="Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}


//maps

const map = new Map()
map.set("IN", "India")
map.set("Fr", "France")
map.set("Fr", "France")

// console.log(map);

// for(const [key, value] of map){
//     // console.log(key, value);
// }

// will for of loop work with Object or not

// const myObject={
//     "game1": "NFS",
//     "game2" : "Spiderman"
// }

// for(const [key, value] of myObject){
//     // console.log(key, ':-', value); here key value both are not iterate here
// }



//++++++++++++++ Object +++++++++++++++

const myObjects={
    js : 'javaScript',
    cpp : 'c++',
    rb : 'ruby'
}

for(const keys in myObjects){
    // console.log(myObjects.keys);
}


const programming =["js", "rb", "py", "java"];
for (const keys in programming){
    // console.log(`${keys} :- ${programming[keys]}`);
}



// [for of loop] work with map(here destracting) and array this is not work with Object
// [for in loop] work with object and array(here destracting)



const myCoding =[
    {
        languageName: "javaScript",
        languageFileName:"Java"
    },
    {
        languageName: "Python",
        languageFileName:"py"
    },
    {
        languageName: "Html",
        languageFileName:"html"
    }
]


// here we use foreach loop

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
})