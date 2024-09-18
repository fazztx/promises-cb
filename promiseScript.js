let myP = new Promise((resolve, reject) => { 
    setTimeout(()=>{
        resolve("obj resolved after 5 seconds"); //Returns obj string
    }, 5000);
});

console.log("1st print");

// myP.then((resolvedOBJ)=>{
//     console.log(resolvedOBJ);
// })

// Create a script which has two methods that return promises - 
// One of the promises should get reolved after 6 seconds timeout and the other one after 3 seconds timeout. 
// Call the promise in such a way that the second promise is invoked after the first promise is resolved.

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("obj after 3");
    }, 3000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("obj after 6");
    }, 6000);
});

p2.then((resolvedOBJ)=>{
    console.log(resolvedOBJ);
    p3.then((resolvedOBJ)=>{
        console.log(resolvedOBJ);
    });
});