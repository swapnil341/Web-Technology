//========== FETCH (Basic Example) ==========
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
    console.log("Users Data:", data);
})
.catch((err) => console.log("Error:", err));



// 1] WHERE WE USE PROMISES (Company Level)
 
// - API calls (fetch, axios)
// - Database operations
// - File handling
// - Authentication systems


 
// 2] WHY PROMISES ARE BETTER THAN CALLBACK
 
// - Avoid callback hell
// - Better readability
// - Error handling using .catch()
// - Easy chaining


 
// 3] 4 EXAMPLES OF PROMISES
 
// Example 1: Basic Promise
let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve("Success!");
    else reject("Failed!");
});
promise1.then(res => console.log(res)).catch(err => console.log(err));


// Example 2: Timeout Promise
let promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Done after 2 sec"), 2000);
});
promise2.then(res => console.log(res));


// Example 3: Number Check
let promise3 = new Promise((resolve, reject) => {
    let num = 10;
    if (num % 2 === 0) resolve("Even Number");
    else reject("Odd Number");
});
promise3.then(console.log).catch(console.log);


// Example 4: Promise Chaining
new Promise((resolve) => {
    resolve(5);
})
.then(num => num * 2)
.then(num => num * 3)
.then(result => console.log("Final Result:", result));


 
// 4] PROMISE USING ASYNC-AWAIT
 
function asyncExample() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Async Await Done"), 2000);
    });
}

async function runAsync() {
    let result = await asyncExample();
    console.log(result);
}
runAsync();


// 5] WHAT IS FETCH METHOD
 
// Fetch is a built-in API used to make HTTP requests.
// It returns a Promise.


 
// 6] 4 EXAMPLES OF FETCH
 
// Example 1: Get Users
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log("Users:", data));

// Example 2: Get Posts
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => console.log("Posts:", data));

// Example 3: Get Single Post
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(data => console.log("Single Post:", data));

// Example 4: POST Request
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Test",
        body: "Hello World",
        userId: 1
    })
})
.then(res => res.json())
.then(data => console.log("Created:", data));


 
// 7] FETCH USING ASYNC-AWAIT
 
async function fetchData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();
        console.log("Async Fetch:", data);
    } catch (err) {
        console.log(err);
    }
}
fetchData();


 
// 8] FETCH POSTS (FIRST 5 RECORDS)
 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
    console.log("First 5 Posts:", data.slice(0, 5));
});


 
// 9] CUSTOM PROMISE (RESOLVE & REJECT AFTER 3 SEC)

let customPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved after 3 sec"), 3000);
    setTimeout(() => reject("Rejected after 3 sec"), 3000);
});

customPromise
.then(res => console.log(res))
.catch(err => console.log(err));



// INTERVIEW QUESTIONS 

// 1] What is Promise?
// -> Object representing future completion or failure of async task.

// 2] Promise States:
// -> Pending, Fulfilled, Rejected

// 3] Promise vs Callback:
// -> Promises avoid callback hell and improve readability.

// 4] What does fetch return?
// -> Promise (Response object)

// 5] Why data.json()?
// -> Converts response into usable JSON data

// 6] then/catch vs async/await:
// -> async/await is cleaner and looks synchronous

// 7] Promise Chaining:
// -> Using multiple .then() to process data step-by-step