
/*
    static methods and properties belong to the class not the object
*/

class User {
    // static properties
    static counter=0;
    constructor(id,username,sallery) {
        // user properties 
        this.i=id;
        this.u=username || "Unknown";
        this.s=sallery<6000 ? sallery+500 : sallery;
        User.counter++;
    }
    // user methods
    static sayHello () {
        console.log("hello from class");
    }

    static objectsNums () {
        return `${User.counter} objects are created`;
    }
    
}

let user1= new User(100,"Ahmed",6000);
let user2= new User(101,"Salma",5000);

User.sayHello();
console.log(User.objectsNums());





