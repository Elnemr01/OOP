
class User {
    constructor(id,username) {
        // user properties 
        this.i=id;
        this.u=username;
    }
    // user methods
    sayHello () {
        return `Hello ${this.u}`;
    }
}

// add fun to the class prototype chain
User.prototype.say=function () {
    return `welcome ${this.u}`;
}


// add property to the buld in class prototype chain
Object.prototype.love="zero web school";

let user1= new User(100,"Ahmed",6000);



console.log(User.prototype);
console.log(user1);
console.log(user1.say());
console.log(User.love);
console.log(user1.love);


