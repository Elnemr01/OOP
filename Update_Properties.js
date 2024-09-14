
class User {
    constructor(id,username,sallery) {
        // user properties 
        this.i=id;
        this.u=username || "Unknown";
        this.s=sallery<6000 ? sallery+500 : sallery;
    }
    // user methods
    updateName (name) {
        this.u=name;
    }

    updateSallery (sa) {
        this.s=sa;
    }
}

let user1= new User(100,"Ahmed",6000);

console.log(user1.u);
user1.updateName("Mohamed"); // update name property
console.log(user1.u);

user1.updateSallery(9000); // update sallery property
console.log(`Sallery after modify= ${user1.s}`);






