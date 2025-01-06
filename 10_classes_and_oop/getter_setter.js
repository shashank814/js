class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}roshan`
    }

    set password(value){
        this._password = value
    }
}

const roshan = new User("h@roshan.ai", "abc")
console.log(roshan.email);
