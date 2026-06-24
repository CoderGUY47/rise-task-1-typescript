# TypeScript Fundamentals

> A complete TypeScript fundamentals reference — covering core concepts with practical code examples for MERN stack developers.

---

## 📁 Project Setup

### Running this Project
```bash
# Clone the repo
git clone https://github.com/CoderGUY47/rise-task-1-typescript.git
cd rise-task-1-typescript

# Install dependencies
npm install

# Run the TypeScript file
npm run dev
# or
npx ts-node index.ts
```

### Initializing TypeScript from Scratch
If you want to set up a similar TypeScript project from scratch, follow these steps:

1. **Initialize Node.js Project:**
   ```bash
   npm init -y
   ```
2. **Install TypeScript & Development Tools:**
   Install TypeScript, `ts-node` (to run `.ts` files directly), and Node.js type definitions:
   ```bash
   npm install typescript ts-node @types/node --save-dev
   ```
3. **Generate `tsconfig.json` Configuration:**
   ```bash
   npx tsc --init
   ```
4. **Key Configuration Options (`tsconfig.json`):**
   - `"target": "ES6"` (Compiles TS to modern ES6 JavaScript)
   - `"module": "commonjs"` (Use CommonJS module resolution for Node.js)
   - `"strict": true` (Enables strict type-checking flags)
   - `"outDir": "./dist"` (Output folder for compiled JS files)
   - `"rootDir": "./"` (Specifies root folder of input files)

---

## 📚 Topics Covered

| # | Topic |
|---|-------|
| 1 | What is TypeScript |
| 2 | Why TypeScript Need? |
| 3 | Project Setup |
| 4 | Primitive Data Types |
| 5 | Array |
| 6 | Object |
| 7 | Function |
| 8 | Optional / Readonly |
| 9 | Type vs Interface |
| 10 | Next.js with TypeScript |

---

## 🎯 Top 10 TypeScript Interview Questions

---

### Q1. What is TypeScript and how is it different from JavaScript?

**Answer:**
TypeScript is a statically typed superset of JavaScript developed by Microsoft. It compiles down to plain JavaScript.

Key differences:
- **Static Typing** — TypeScript checks type errors at compile time; JavaScript checks them at runtime.
- **Type Annotations** — You can explicitly declare variable types (`const age: number = 22`).
- **Better IDE Support** — Autocomplete, refactoring, and IntelliSense work better.
- **Errors Caught Early** — Bugs are identified during development rather than when the code is executed.

```ts
// JavaScript
let name = "Hasan";
name = 42; // ✅ No compiler error in JS (can lead to bugs)

// TypeScript
let name: string = "Hasan";
name = 42; // ❌ Error: Type 'number' is not assignable to type 'string'
```

---

### Q2. What is the difference between `type` and `interface` in TypeScript?

**Answer:**

| Feature | `type` | `interface` |
|--------|--------|-------------|
| Union types | ✅ `type A = B \| C` | ❌ Not supported |
| Intersection | ✅ `type A = B & C` | ✅ Use `extends` |
| Declaration Merging | ❌ Not supported | ✅ Supported (can declare same interface multiple times) |
| Primitive aliases | ✅ `type ID = string` | ❌ Not supported |
| Class implementation | ✅ | ✅ (preferred in OOP) |

**Rule of Thumb:**
- Use `interface` for object shapes, public APIs, and class implementations.
- Use `type` for unions, intersections, primitive aliases, and tuples.

---

### Q3. What is the difference between `void` and `never` in TypeScript?

**Answer:**

- **`void`** — used when a function executes its code but does not return any value.
- **`never`** — used when a function *never* finishes or returns (e.g., throwing an error or running an infinite loop).

```ts
// void: runs successfully but returns nothing
function logMessage(msg: string): void {
  console.log(msg);
}

// never: the function will never reach the end
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
```

---

### Q4. What is the difference between `any` and `unknown` in TypeScript?

**Answer:**

Both types allow any value to be assigned to them, but `unknown` is much safer because it enforces type checking.

- **`any`** — disables type checking completely. You can call any method on it without compiler errors, which can crash the application at runtime.
- **`unknown`** — requires you to perform a type check (type narrowing) before you can perform operations on it.

```ts
// any (unsafe)
let value: any = "hello";
value.toFixed(2); // ✅ No compile error, but crashes at runtime!

// unknown (safe)
let userInput: unknown = "hello";
userInput.toUpperCase(); // ❌ Compile error: Object is of type 'unknown'

if (typeof userInput === "string") {
  userInput.toUpperCase(); // ✅ Safe because type is verified
}
```

---

### Q5. What is the use of `readonly` and `optional (?)` properties in TypeScript?

**Answer:**

- **`readonly`** — marks a property as immutable so it cannot be reassigned after the object is created.
- **`optional (?)`** — marks a property as not required, meaning it can be omitted.

```ts
type User = {
  readonly id: number; // cannot be changed
  name: string;
  email?: string;       // optional property
};

const user: User = { id: 1, name: "Hasan" }; // ✅ email is omitted
user.name = "Hasan Al Islam"; // ✅ allowed
user.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property
```

---

### Q6. What is the difference between an Array and a Tuple in TypeScript?

**Answer:**

- **Array** — stores a collection of elements of the same type and has an arbitrary/variable length.
- **Tuple** — stores a fixed-size collection of elements where each position has a predefined type.

```ts
// Array (dynamic size, same type)
const fruits: string[] = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); // ✅ allowed

// Tuple (fixed size, specific types in specific positions)
let employee: [number, string] = [101, "Hasan"];
employee = ["Hasan", 101]; // ❌ Error: Type 'string' is not assignable to type 'number'
```

---

### Q7. What are Union and Intersection types?

**Answer:**

- **Union (`|`)** — allows a variable to hold one of several specified types (behaves like an OR operator).
- **Intersection (`&`)** — combines multiple types into one new type that must satisfy all combined types (behaves like an AND operator).

```ts
// Union Type
type ID = string | number;
let userId: ID = "usr_123"; // ✅ string
userId = 456;               // ✅ number

// Intersection Type
type Person = { name: string };
type Employee = { id: number };
type Staff = Person & Employee; // must contain both properties

const developer: Staff = { id: 101, name: "Hasan" };
```

---

### Q8. What is Type Narrowing in TypeScript?

**Answer:**
Type narrowing is the process of refining a variable from a broader type (like a union) to a more specific type using runtime checks.

Common ways to narrow types:
- `typeof` operator (for primitives like strings, numbers)
- `instanceof` check (for classes)
- Truthiness or equality checks

```ts
function processValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); // val is narrowed to string
  } else {
    console.log(val.toFixed(2));    // val is narrowed to number
  }
}
```

---

### Q9. What are Generics and why are they used?

**Answer:**
Generics allow us to write flexible, reusable, and type-safe code that can work with different types instead of a single specific type.

```ts
// Without Generics (repeating code or using unsafe 'any')
function getFirstItem(arr: any[]): any {
  return arr[0];
}

// With Generics (reusable and safe)
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst<number>([10, 20, 30]); // T is number
const str = getFirst<string>(["a", "b", "c"]); // T is string
```

---

### Q10. How does TypeScript work with React and Next.js?

**Answer:**
Next.js and React provide first-class support for TypeScript. In Next.js, we use types for pages, components, and props:

- **Component Props:** Typing props ensures components receive the correct data shapes.
- **Next.js Page Props:** Typing parameters like `params` and `searchParams`.

```tsx
// Typing component props in React
type CardProps = {
  title: string;
  description: string;
  isActive?: boolean;
};

export default function Card({ title, description, isActive = false }: CardProps) {
  return (
    <div className={isActive ? "active" : ""}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

---

## 🛠 Tech Stack

- **TypeScript** v5.4
- **ts-node** — run TS without compiling
- **Node.js** v22

---

## 👨‍💻 Author

**S.M. Hasan Ul Islam**
- Portfolio: [smhasan.pro.bd](https://smhasan.pro.bd)
- GitHub: [@CoderGUY47](https://github.com/CoderGUY47)
