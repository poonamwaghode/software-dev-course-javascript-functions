/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Function to greet a list of names
function greetNames(names) {
   let greetings = [];
   for (let i = 0; i < names.length; i++) {
       greetings.push(`Welcome, ${names[i]}!`);
   }
   return greetings;
}

// Function to calculate the sum of two numbers
function calculateSum(num1, num2) {
   return num1 + num2;
}

// Function to calculate the product of two numbers
function calculateProduct(num1, num2) {
   return num1 * num2;
}

// Function to print names from a list
function printList(items) {
   console.log("Names in the list:");
   for (let i = 0; i < items.length; i++) {
       console.log(items[i]);
   }
}

/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!


// Task 1: Greet Names
const names = ["Alice", "Bob", "Charlie"];
const greetings = greetNames(names);
greetings.forEach(greeting => console.log(greeting));

// Task 2: Sum Calculation
const num1 = 5, num2 = 10;
const sum = calculateSum(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Task 3: Product Calculation
const product = calculateProduct(num1, num2);
console.log(`The product of ${num1} and ${num2} is ${product}`);

// Task 4: Print Names
printList(names);
