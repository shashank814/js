// singleton

// object literals

const JsUser = {
    name: "Roshan",
    age: 18,
    location: "Patna"
    // email: "roshan@google.com",
    // isLoggedIn: false,
}

 console.log(JsUser.location)
// console.log(JsUser["email"])

JsUser.greetings = function(){
    console.log("Hello JS user");
}


JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());