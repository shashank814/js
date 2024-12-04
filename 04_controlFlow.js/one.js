// if
const isUserloggedIn = true
const temperature = 41

if( temperature < 50 ) {
     console.log("less than 50");
}  else {
    console.log("temperature is greater than 50");
}

// console.log("execute");

const score = 200

if(score > 100) {
    let power = "fly"
    console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`);    <<-- out of scope

const balance = 100

// if( balance > 500) console.log("test"), console.log("test 2");

/*
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("balance")
}
    */

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}