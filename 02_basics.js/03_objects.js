// singleton
// object create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Roshan"
    "full name": "Roshan Singh",
    [mySym]: "myKey1",
     age: 20,
    location: "Kolkata",
    // email: roshan234@gmail.com,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Staurday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "roshan@123.com"
Object.freeze(JsUser)
JsUser.email = "roshan@programmer.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());

