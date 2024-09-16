class User {
    #c;
    constructor(username, card) {
    this.u = username;
    this.#c = card;
    }
    get showCard (){
        return this.#c;
    }

    set updateCard (val){
        this.#c=val;
    }
}

let userOne = new User("Osama", "1234-5678-1234-5678");
console.log(userOne.showCard);

userOne.updateCard="0000-0000-0000-0000";
console.log(userOne.showCard);


