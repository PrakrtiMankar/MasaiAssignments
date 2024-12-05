const profile = {
    name: "Charlie", 
    age: 29, 
    address: 
    { 
        city: "San Francisco", 
        zipcode: "94101" 
    } 
};

const updates = { 
    age: 30, 
    address: { 
        zipcode: "94109", 
        country: "USA" 
    } 
};
// to merge these opjects using spread operator
// properties of upadtes ahould overwrite profile

const result = {
    ...profile,
    ...updates,
    address: {
        ...profile.address,
        ...updates.address
    }
}
console.log(result);