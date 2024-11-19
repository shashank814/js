// stack (primitive), heap (Non-Primitive)

let myName = "shashank"

let anotherName = myName
anotherName = "roshan"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne 

userTwo.email = "roshan@123.com"

console.log(userOne.email);
console.log(userTwo.email);