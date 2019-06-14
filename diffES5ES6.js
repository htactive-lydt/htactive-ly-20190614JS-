// Using const and let

let myVariable = "Hi Ly";
// myVariable += " Xinh đẹp!";

console.log(myVariable); // Hi Ly

// const is only protecting its reference from changing.
//We can still mutate an object that is stored as a const
const myObject = {
    key: 1,
    name: "Ly"
};
myObject.country = "VietNam";

console.log(myObject); // Logs { id: 1, name: "Ly", country: "VietNam"}

// Export
myFunction = (a, b) => a + b;

module.exports = {
    myFunction,
    x: 1000
};

// Arrow functions
// ES5
var array = [1, 2, 3];

var newArray = array.map(function(num) {
    return num + 1;
});

// ES6
var array = [1, 2, 3];

var newArray = array.map(num => num + 1);

// var myFunction = () => { key: 1, name: 'Tiger' } Error

var myFunction = () => ({ key: 1, name: 'Tiger' }); // Must add ()

// String templating

let name = "Ly";
let applicationName = "PUBG";
// Written in ES5
var myString = "Hi " + name + ", thanks for download " + applicationName;
console.log(myString);

// Written in ES6
var myString = `Hi ${name}, thanks for download ${applicationName}`;
console.log(myString);

// Destructuring Assignment
// Written in ES5
function myObject() {
    return {
        name: "Ly xinh đẹp",
        country: "Vietnam"
    };
}

var object = myObject();
var name = object.name;
var country = object.country;

// Written in ES6
function myObject() {
    return {
        name: "Ly xinh đẹp",
        country: "Vietnam"
    };
}

var { name, country } = myObject();