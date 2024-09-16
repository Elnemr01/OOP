let obj={a:1,b:2};

Object.defineProperty(obj,'c',{
    writable:true,
    enumerable:true,
    configurable:true,
    value:3
});

// if the writable is true -> don't write on it
obj.c=100;

// if the enumerable is false -> don't loop on it
for(let x in obj) {
    console.log(x+" "+obj[x]);
}

// if the configurable is false -> don't redefine it if you change value or any descriptor values
// Object.defineProperty(obj,'c',{
//     writable:true,
//     enumerable:true,
//     configurable:false,
//     value:3
// });

// console.log(delete obj.c); delete operator return true if deletion is done
console.log(obj);


/// add lots of properties

let obj2={a:1,b:2};

Object.defineProperties(obj2,{
    c:{
        writable:true,
        value:3,
    },
    d:{
        enumerable:true,
        value:4,
    },
    e:{
        configurable:true,
        value:5,
    }
});
console.log(obj2);

// get descriptor of a property
console.log(Object.getOwnPropertyDescriptor(obj2,'c'));

// get descriptor of all properties of the obj
console.log(Object.getOwnPropertyDescriptors(obj2));
