let promise = new promise((resolve, reject) =>{
    console.log("I am a promise");
    resolve(123);
    //reject("error occured")
})


const getPromise = ()=>{
    new Promise((resolve, reject) =>{
        console.log("I am a promise");
        //resolve("success");
        reject("network error")
    });
}

let Promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled", res)
})

promise.catch((error)=>{
    console.log("rejected", error)
    
});