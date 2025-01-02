// ES6

class user {
      constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password
      }

      encryptPassword() {
        return `${this.password}abc`
      }
      changeUsername(){
        return `${this.username.toUpperCase()}`
      }
}

const code = new user("code", "code@google.com", "123")

console.log(code.encryptPassword());
console.log(code.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@google.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
