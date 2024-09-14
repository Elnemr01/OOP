
/// old syntax of constructor
function User1 (name, id) {
    this.name=name,
    this.id=id;
}

let obj1=new User1("Ahmed",100);
let obj2=new User1("Mohamed",200);

console.log(obj1.name +" "+ obj1.id);
console.log(obj2.name +" "+ obj2.id);




/// new syntax
class User2 {
    constructor(name, id) {
        this.name = name,
            this.id = id;
    }
}

let obj3=new User2("Aya",300);
let obj4=new User2("Ebrahim",400);


console.log(obj3.name +" "+ obj3.id);
console.log(`${obj4.name} ${obj4.id}`);
