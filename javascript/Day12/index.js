// function riskyFunction() {
//     throw new Error('Something went wrong in riskyFunction!');
// }
// try{
//     riskyFunction();
// }catch(err){
//     console.error('Caught an error:', err.message);
// }

// function isValid(a,b){
//     try{
//         if (b === 0) {
//             throw new Error('Division by zero is not allowed');
//         }
//       const res=  a/b;
//       return res;
//     }catch(err){
//         console.error('Error:', err.message);
//         return 'Invalid input';
//     }
//     finally{

//         console.log("Code execution complete")
//     }
    
// }

// console.log(isValid(5,5))




// class CustomValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = 'CustomValidationError';
//     }
//   }
  
//   function validateInput(input) {
//     if (!input || input.trim() === '') {
//       throw new CustomValidationError('Input cannot be empty');
//     }
//     return input.trim();
//   }
  
//   function processInput(input) {
//     try {
//       console.log('Try block: Attempting to process input');
//       const validatedInput = validateInput(input);
//       console.log(`Input is valid: "${validatedInput}"`);
//     } catch (error) {
//       if (error instanceof CustomValidationError) {
//         console.log(`Catch block: Caught CustomValidationError - ${error.message}`);
//       } else {
//         console.log(`Catch block: Caught unexpected error - ${error.message}`);
//       }
//     } finally {
//       console.log('Finally block: This runs regardless of whether an error occurred');
//     }
//   }
  
//   console.log('Testing with empty input:');
//   processInput('');
  
//   console.log('\nTesting with valid input:');
//   processInput('Hello, world!');




// function randomPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve("Success!");
//             } else {
//                 reject(new Error("Random failure"));
//             }
//         }, 1000);
//     });
// }

// randomPromise()
//     .then(result => console.log("Promise resolved:", result))
//     .catch(error => console.log("Promise rejected:", error.message));




// async function handleRandomPromise() {
//     try {
//         const result = await randomPromise();
//         console.log("Async function success:", result);
//     } catch (error) {
//         console.log("Async function error:", error.message);
//     }
// }

// handleRandomPromise();

// Task 8: Use fetch with an invalid URL and handle with .catch()
fetch('https://invalid-url-that-will-fail.com')
    .then(response => response.json())
    .then(data => console.log("Fetch successful:", data))
    .catch(error => console.log("Fetch error:", error.message));


async function fetchInvalidUrl() {
    try {
        const response = await fetch('https://another-invalid-url.com');
        const data = await response.json();
        console.log("Async fetch successful:", data);
    } catch (error) {
        console.log("Async fetch error:", error.message);
    }
}

fetchInvalidUrl();