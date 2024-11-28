
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
// console.log(loginUserMessage())