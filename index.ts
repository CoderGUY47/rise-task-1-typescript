// =========================
//        (10 TASKS)
// =========================

export {};

////////*****==============\\\\\\\\
// 1. WHAT IS TYPESCRIPT
//\\\\\\*****==============////////
// typescript acts as a wrapper around javascript that checks types at compile time.
console.log("=== 1. WHAT IS TYPESCRIPT ===");
console.log("TypeScript is a safer version of JavaScript that catches errors early.");



////////*****==============\\\\\\\\
// 2. WHY TYPESCRIPT NEED?
//\\\\\\*****==============////////
// it prevents common errors like typos, wrong variables, or passing wrong arguments to functions.
console.log("\n=== 2. WHY TYPESCRIPT NEED? ===");
console.log("It helps us find bugs before running our code, making development easier.");



////////*****==============\\\\\\\\
// 3. PROJECT SETUP
//\\\\\\*****==============////////
/*
  how to setup a typescript project:
  1. download and install node.js from https://nodejs.org
  2. initialize node project:  npm init -y
  3. install typescript:       npm install typescript ts-node @types/node --save-dev
  4. create config file:       npx tsc --init
  5. run code:                 npx ts-node index.ts

  official typescript website: https://www.typescriptlang.org
*/
// tsconfig.json controls how typescript behaves and compiles our files.
console.log("\n=== 3. PROJECT SETUP ===");
console.log("initialized with npm init, typescript, and tsconfig.json");



////////*****==============\\\\\\\\
// 4. PRIMITIVE DATA TYPES
//\\\\\\*****==============////////
// we use colons to declare types for variable name (string), age (number), and status (boolean).
const myName: string = "Hasan";
const myAge: number = 22;
const isCoding: boolean = true;

console.log("\n=== 4. PRIMITIVE DATA TYPES ===");
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Coding:", isCoding);



////////*****==============\\\\\\\\
// 5. ARRAY
//\\\\\\*****==============////////
// string[] means an array containing only strings, and number[] means only numbers.
const fruits: string[] = ["Apple", "Banana", "Mango"];
const scores: number[] = [80, 90, 100];

console.log("\n=== 5. ARRAY ===");
console.log("Fruits:", fruits);
console.log("Scores:", scores);



////////*****==============\\\\\\\\
// 6. OBJECT
//\\\\\\*****==============////////
// type alias creates a custom shape that objects must match to prevent missing fields.
type Student = {
  roll: number;
  name: string;
};

const studentInfo: Student = {
  roll: 101,
  name: "Hasan",
};

console.log("\n=== 6. OBJECT ===");
console.log("Student Info:", studentInfo);
