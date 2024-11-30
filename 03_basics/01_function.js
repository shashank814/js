
function sayMyName() {
console.log("R");
console.log("O");
console.log("S");
console.log("H");
console.log("A");
console.log("N");
}

// sayMyName()         // output

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}


function addTwoNumbers(number1, number2) {
       // let result = number1 + number2
       // return result
    
       return number1 + number2
}
// addTwoNumbers(3,"4");
// addTwoNumbers(3,a)

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username) {
    return1`${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1) {      // ... -> rest operator
           return num1
}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "roshan",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyobject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
/*
 handleObject({
    username: "sam",
    price:199
})
    */

const myNewArray = [200, 400, 500, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 2000]));