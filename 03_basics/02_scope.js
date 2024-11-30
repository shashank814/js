// var c = 300

let a = 300       // global scope

if(true) {          // block scope
    let a = 10
    const b = 20
    // console.log("INNER": a)
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "roshan"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    // error <<-- out of scope

    two()
}

// one()

if(true) {
    const username = "roshan"
    if(username === "roshan") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// *********** interesting ************

console.log(addone(5))

function addone(num) {
    return num + 1
}

// addTwo(5) 
const addTwo = function(num) {   // addTwo -->> expression
    return num + 2
}
