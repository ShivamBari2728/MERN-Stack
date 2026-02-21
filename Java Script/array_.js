let students = ["Shivam", "Kishan", "Raj"]
console.log(typeof (students)) //array is a object

//Spread Operator

let student_passed = [...students, "ram"]
console.log(student_passed)

// Map function 

const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2); // runs a function of every element and returns a new array.
// map() ALWAYS returns same length array.
// If you don’t return something → it returns undefined.

console.log(doubled);


// Filter 

const users = [
    { name: "Shivam", active: true },
    { name: "Raj", active: false },
    { name: "Raman", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);


// Reduce function 

const users1 = [
    { name: "Shivam", role: "admin" },
    { name: "Raj", role: "user" },
    { name: "Raman", role: "admin" },
    { name: "Amit", role: "user" }
];

const grouped = users1.reduce((acc, curr) => {
    // if role doesn't exist in object, create empty array
    if (!acc[curr.role]) {
        acc[curr.role] = [];
    }

    // push name into role array
    acc[curr.role].push(curr.name);

    return acc;
}, {});

console.log(grouped);


// Rest operator 

const numbers = [1, 2, 3, 4, 5];
const [first, ...remaining] = numbers;

console.log(first);
console.log(remaining);

//usage

function sum(...nums) {
    console.log(nums);
}

sum(1, 2, 3, 4, 5);