
// parent class 
class User {
    // static properties
    static counter=0;
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

//child class
class Admin extends User {
    constructor(id,username,permission) {
        super(id,username);
        this.p=permission;
    }
}


let user1= new User(100,"Ahmed",6000);
let admin1=new Admin(102,"Ayman","all");

console.log(admin1.i);
console.log(admin1.sayHello());

class Super extends Admin {
    constructor (id,username,permission,email) {
        super(id,username,permission);
        this.e=email;
    }
}

let super1=new Super(103,"Salma",1,"Ahmed@yahoo.com");
console.log(super1.e);
console.log(super1.i);
console.log(super1.p);
console.log(super1.e);
console.log(super1.sayHello());

