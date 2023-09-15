// const month=3
// const months='April'

// switch(months){
//     case 'jan':
//         console.log('January');
//         break;
//     case 'feb':
//         console.log('Feb');
//         break;
//     case 'march':
//         console.log('March');
//         break;
//     case 'April':
//         console.log('April');
//         break;
//     default:
//         console.log('check the value of month');
//         break;
// }

//ternary operator

//this is simple way

// const userEmail='himanshu@gmail.com'

// if(userEmail){
//     console.log(`Got useremail`);
// }else{
//     console.log("don't have user email");
// }

// userEmail ? console.log('got useremail'): console.log("don't have useremail");

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values
// "0", "false", " ", [], {}, function(){}, 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// how to check empty array and object

// const userArray=[]
// if(userArray.length === 0){
//     console.log('Array is empty');
// }

// const emptObj={}

// if(Object.keys(emptObj).length === 0){
//     console.log('Oject is empty')
// }



// false == 0  true
// false == '' ture
// 0 == '' true



// Nulish Coalescing Operator(??):null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 13 ?? 10
// console.log(val1);