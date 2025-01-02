class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const code = new Teacher("code", "code@teacher.com", "123")

code.addCourse()
code.logMe()
const newCode = new User("newCode")

newCode.logMe()

console.log(code instanceof User);

