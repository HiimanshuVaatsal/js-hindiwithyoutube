const arr=[1,2,3,4,5]
// console.log(arr[0]);

//Array methods

// arr.push(3); this is add the value in the end of the array.
// arr.pop(); this is delete the value of array in the last;
// arr.unshift(0); this is add the value of the starting of array.
// arr.shift(); this is the delete the value of array in the start.
// console.log(arr.includes(4));
// console.log(arr.indexOf(3)); this is find the index of value in array.

// const newArr=arr.join();
// console.log(newArr);
// console.log(typeof newArr);


//Difference between slice, splice

// console.log('A',arr);

// const myn1=arr.slice(1,3);
// console.log(myn1);
// console.log('b',arr);

// const myn2=arr.splice(1,3)
// console.log(myn2);


// const marvel_heros=["thor", "Ironman", "spiderman"];
// const de_heros=["superman","flash","batman"]
//Here can you marged two array
// marvel_heros.push(de_heros);
// console.log(marvel_heros); Here full array marged in the first array like this ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

//2 Approach

// const a=marvel_heros.concat(de_heros);

// console.log(a);

//3 Approach

// const allnew_heros=[...marvel_heros,...de_heros]
// console.log(allnew_heros);


// const another_array=[1,2,3[4,5,6],7,[6,7,[4,5]]]

// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);
// console.log(Array.isArray('Hiimanshu'));
// console.log(Array.from('Hiimanshu'));


// console.log(Array.from{name:'himanshuk'}) output:- empty array

let score1=100
let score2=200
let score3=300

const newArray=(Array.of(score1,score2,score3));
console.log(newArray);