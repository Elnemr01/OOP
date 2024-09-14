
class User {
    constructor(id,username,sallery) {
        // user properties 
        this.i=id;
        this.u=username || "Unknown";
        this.s=sallery<6000 ? sallery+500 : sallery;
        this.msg= ()=> `Hello ${this.u} Your Sallery is ${this.s}`;
    }
    // user methods
    displayMsg () {
        return `Hello ${this.u} Your Sallery is ${this.s}`;
    }
}

let user1= new User(100,"Ahmed",6000);
let user2=new User (101,"",5000);

console.log(user1.username);
console.log(user2.username);
console.log(user1.msg()); // output the property msg
console.log(user1.msg); // output native code

console.log(user1.displayMsg()); // output the function msg
console.log(user1.displayMsg); // output native code



