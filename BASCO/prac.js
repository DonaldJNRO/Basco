const userData = [
    {
        name: "Peeps",
        age: 24,
        occupation: "student"
    },
    {
        name: "Manny",
        age: 29,
        occupation: "student"
    },
    {
        name: "Linus",
        age: 17,
        occupation: "student"
    },
    {
        name: "Mauro",
        age: 117,
        occupation: "street OG"
    },
    {
        name: "Mauro",
        age: 17,
        occupation: "street OG"
    },
    {
        name: "Mauro",
        age: 18,
        occupation: "street OG"
    },
    {
        name: "Mauro",
        age: 38,
        occupation: "street OG"
    },
    {
        name: "Phyna",
        age: 27,
        occupation: "street OG"
    },
];

// In an Array userData display all occupation that is not student.....

// In an Array userData display all data less than equal to 18
// In an Array userData display name "Mauro less than 18"

// let occupation = userData.filter(occ => occ.occupation != "student");
// console.log(occupation);


// let newAge = userData.filter(ages => ages.age <= 18);
// console.log(newAge);
let username = userData.filter(names => names.name === "Mauro" && names.age <= 18);
console.log(username);


let newAge = userData.filter(ages => ages.age < 18);
// console.log(newAge); 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.includes("grapes");
const a = fruits.joins("and"); 

console.log(a)