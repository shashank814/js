const user = {
    username: "roshan",
    price: "999",

    greetings: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.greetings()
// user.username = "sam"
// user.greetings()

// console.log(this)

/*
function one() {
    let username = "roshan"
    console.log(this.username);
}

one()
*/


const one =  ()  => {                // => this is arrow function
    let username = "roshan"
    console.log(this);
}

// one()

/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
    */

// const addTwo = (num1, num2) => num1 + num2      // implicit return
// const addTwo = (num1, num2) => (num1 + num2) // implicit return

const addTwo = (num1, num2) => ({username: "roshan"})

console.log(addTwo(3,4))

// const myArray = [2,3,4,5,6]

// myArray.forEach(() => {})