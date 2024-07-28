class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@Phone.com")
iphone.logMe()
