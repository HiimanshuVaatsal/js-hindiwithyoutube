// shoping card login like

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(2,3,5,5,66,7));


const user={
    name:'himanshuk',
    price:99
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    name:'priyanshu',
    price:300
})




//  how to pass array in function

const mynewArray=[200,300,400]

function arrayfun(getArray){
    return `my newArray ${getArray[2]}`
}

console.log(arrayfun(mynewArray));
