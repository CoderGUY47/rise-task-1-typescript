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



////////*****==============\\\\\\\\
// 7. FUNCTION
//\\\\\\*****==============////////
// the parameter types are followed by colons, and the return type is placed after parameters.
function add(x: number, y: number): number {
  return x + y;
}

const sumResult = add(5, 10);

console.log("\n=== 7. FUNCTION ===");
console.log("5 + 10 =", sumResult);



////////*****==============\\\\\\\\
// 8. OPTIONAL / READONLY
//\\\\\\*****==============////////
// readonly protects critical data from being overwritten, while optional properties can be skipped.
type Profile = {
  readonly id: number; // can never be changed
  username: string;
  phone?: string; // optional (not required)
};

const myProfile: Profile = {
  id: 1234,
  username: "hasan_dev",
  // phone is optional, so we can skip it
};

console.log("\n=== 8. OPTIONAL / READONLY ===");
console.log("ID:", myProfile.id);
console.log("Username:", myProfile.username);



////////*****==============\\\\\\\\
// 9. TYPE vs INTERFACE
//\\\\\\*****==============////////
// both 'type' and 'interface' describe objects, but interfaces are mergeable and support class inheritance.
type Book = {
  title: string;
};

interface Pen {
  color: string;
}

const myBook: Book = { title: "TypeScript Guide" };
const myPen: Pen = { color: "Blue" };

console.log("\n=== 9. TYPE vs INTERFACE ===");
console.log("Book Title:", myBook.title);
console.log("Pen Color:", myPen.color);



////////*****==============\\\\\\\\
// 10. NEXT()
//\\\\\\*****==============////////
// void is used because this function only prints a message and does not return any value.
function next(): void {
  console.log("next!");
}

console.log("\n=== 10. NEXT() ===");
next();

export {};
