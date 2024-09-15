
class User {
    // static properties
    static counter=0;
    // private properties
    #s;
    constructor(id,username,sallery) {
        // user properties 
        this.i=id;
        this.u=username;
        this.#s=sallery;
    }
    // user methods
    sayHello () {
        return `Hello ${this.u}`;
    }

    getSallery() {
        return parseInt(this.#s);
    }
}


let user1= new User(100,"Ahmed","6000 $");

console.log(user1.getSallery()*.3);


