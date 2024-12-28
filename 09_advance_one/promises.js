const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB callls, cryptography, network
    setTimeout(function(){
        console.log('Aync task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promsie consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");  
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Code", email: "code@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "roshan", password: "123"})
            } else {
                reject('Error: Something went wrong')
            }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

const PromsieFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
            } else {
                reject('Error: JS went wrong')
            }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await PromsieFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

/*
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

*/

