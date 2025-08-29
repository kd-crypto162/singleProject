let age = 25;
const name = "kuda";
var isStudent = true; 

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


function greetUser(userName) {
    return `Hello, ${userName}!`;
}

function isEven(num) {
    return num % 2 === 0;
}

console.log(greetUser(name)); 
console.log(isEven(4)); 

const fruits = ["Apple", "Banana", "Cherry"];
console.log("For loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("While loop:");
let count = 3;
while (count > 0) {
    console.log(count);
    count--;
}

const outputElement = document.getElementById("output");
outputElement.textContent = "Welcome to the assignment!";

const button = document.getElementById("btn");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "lightblue";
});
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "";
});
