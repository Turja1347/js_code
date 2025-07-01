// ------------------------------------------------------------
// ✅ JavaScript Error Handling with try...catch...finally
// ------------------------------------------------------------

// The try...catch...finally structure is used to handle errors gracefully.
// It prevents program crashes and ensures that certain code always runs.

// Structure:
// try     → contains code that might throw an error
// catch   → handles the error if one occurs
// finally → runs always, regardless of error

// ------------------------------------------------------------
// Example 1: ✅ No Error Occurs
// ------------------------------------------------------------
try {
    // Code runs normally
    let x = 10;
    console.log("Example 1: Value of x:", x); // Output: 10
} catch (error) {
    console.log("Example 1: Caught error:", error);
} finally {
    console.log("Example 1: Finally block always runs.\n");
}

// ------------------------------------------------------------
// Example 2: ⚠️ ReferenceError (undefined variable)
// ------------------------------------------------------------
try {
    console.log("Example 2: Before error");
    console.log(y);  // 'y' is not defined → ReferenceError
} catch (error) {
    console.log("Example 2: Caught error name:", error.name);     // ReferenceError
    console.log("Example 2: Error message:", error.message);      // y is not defined
} finally {
    console.log("Example 2: Finally block executed.\n");
}

// ------------------------------------------------------------
// Example 3: ⚠️ TypeError (calling a number as a function)
// ------------------------------------------------------------
try {
    let num = 42;
    num();  // num is not a function → TypeError
} catch (error) {
    console.log("Example 3: Caught error name:", error.name);     // TypeError
    console.log("Example 3: Error message:", error.message);
} finally {
    console.log("Example 3: Finally block executed.\n");
}

// ------------------------------------------------------------
// Example 4: ⚠️ SyntaxError (invalid JS via eval)
// ------------------------------------------------------------
try {
    eval("let a = ");  // Invalid JS syntax → SyntaxError
} catch (error) {
    console.log("Example 4: Caught error name:", error.name);     // SyntaxError
    console.log("Example 4: Error message:", error.message);
} finally {
    console.log("Example 4: Finally block executed.\n");
}

// ------------------------------------------------------------
// Example 5: ⚠️ RangeError (stack overflow via recursion)
// ------------------------------------------------------------
try {
    function recursive() {
        return recursive();  // Infinite recursion → RangeError
    }
    recursive();
} catch (error) {
    console.log("Example 5: Caught error name:", error.name);     // RangeError
    console.log("Example 5: Error message:", error.message);
} finally {
    console.log("Example 5: Finally block executed.\n");
}

// ------------------------------------------------------------
// Example 6: ⚠️ Custom Error using throw
// ------------------------------------------------------------
try {
    let age = -5;
    if (age < 0) {
        throw new Error("Age cannot be negative");  // Custom error
    }
    console.log("Example 6: Age is valid");
} catch (error) {
    console.log("Example 6: Caught error name:", error.name);     // Error
    console.log("Example 6: Error message:", error.message);      // Age cannot be negative
} finally {
    console.log("Example 6: Finally block executed.\n");
}

// ------------------------------------------------------------
// 🧠 Summary of Error Types in JavaScript
// ------------------------------------------------------------
// ReferenceError → Using a variable that hasn't been declared
// TypeError      → Performing an invalid operation on a data type
// SyntaxError    → Invalid code detected (only via eval or Function)
// RangeError     → Values out of range (e.g., stack overflow)
// Custom Error   → Created using throw new Error("message")

// ------------------------------------------------------------
// 🔄 Note:
// The finally block is executed ALWAYS:
// - If an error occurs → it runs
// - If no error occurs → it still runs
// - Even if a return or throw is used inside try/catch → finally still runs
// ------------------------------------------------------------
