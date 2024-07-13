# JavaScript Basics: Variables and Data Types

This section covers fundamental concepts related to variables and data types in JavaScript. Whether you’re a beginner or need a quick refresher, these activities will help you understand the essentials.

## Tasks/Activities

### Variable Declaration

1. **Declare a variable using `var`, assign it a number, and log the value to the console.**
    ```javascript
    var myVar = 42;
    console.log(myVar);
    ```

2. **Declare a variable using `let`, assign it a string, and log the value to the console.**
    ```javascript
    let myLet = "Hello, World!";
    console.log(myLet);
    ```

### Constant Declaration

3. **Declare a variable using `const`, assign it a boolean value, and log the value to the console.**
    ```javascript
    const myConst = true;
    console.log(myConst);
    ```

### Data Types

4. **Create variables of different data types (number, string, boolean, object, array) and log each variable’s type using the `typeof` operator.**
    ```javascript
    let num = 100;
    let str = "JavaScript";
    let bool = false;
    let obj = { name: "John", age: 30 };
    let arr = [1, 2, 3, 4, 5];

    console.log(typeof num);  // number
    console.log(typeof str);  // string
    console.log(typeof bool); // boolean
    console.log(typeof obj);  // object
    console.log(typeof arr);  // object
    ```

### Reassigning Variables

5. **Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.**
    ```javascript
    let myVariable = "Initial Value";
    console.log(myVariable);

    myVariable = "New Value";
    console.log(myVariable);
    ```

### Understanding `const`

6. **Try reassigning a variable declared with `const` and observe the error.**
    ```javascript
    const myConstant = 10;
    console.log(myConstant);

    // Attempt to reassign
    myConstant = 20; // This will cause an error
    ```

## Feature Request

### Variable Types Console Log

Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

```javascript
let number = 123;
let string = "Hello";
let boolean = true;
let object = { key: "value" };
let array = [1, 2, 3];

console.log(number, typeof number);
console.log(string, typeof string);
console.log(boolean, typeof boolean);
console.log(object, typeof object);
console.log(array, typeof array);
