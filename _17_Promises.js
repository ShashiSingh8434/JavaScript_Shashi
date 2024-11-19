let a = new Promise((resolve, reject)=>{
    // async function that you want to write
    console.log("done lol 1")
    resolve(1)  //this acts as return in function
    // reject(new Error("lol failed"))   this is how we fail a promises
})

a.then(()=>{
    // write async function to execute when the promise above return its value i.e. completes
    console.log("done lol 2")
    // if want to write you can again make a promise here to make a chain
    return new Promise((resolve, reject)=>{
        // same shit............
    })
})

a.then().then(()=>{
    console.log("done lol 3")
})


// make multiple promises to make the program run and execute multiple async things parallely