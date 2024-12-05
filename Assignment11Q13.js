const people = [ 
    { 
        name: "Alice", 
        address: 
        { 
            city: "New York", 
            street: 
            { 
                sname: "Broadway", 
                number: 123 
            } 
        } 
    }, 
    { 
        name: "Bob", 
        address: 
        { 
            city: "Los Angeles", 
            street: 
            { 
                sname: "Sunset Boulevard", 
                number: 456 
            } 
        } 
    
    } 
];

let arr = [people.length-1];
for(let i = 0; i<people.length; i++){
    let {name, address: {city, street: {sname, number}}} = people[i];
    
    let str = `${name} lives in ${city} on ${sname}`;

    arr[i] = str;
};

console.log(arr);