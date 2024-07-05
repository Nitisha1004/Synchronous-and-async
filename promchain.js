function aysnFunc1(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        console.log("some data 1");
        resolve("success");
       }, 4000) 
    })
}

function aysnFunc2(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        console.log("some data 2");
        resolve("success");
       }, 4000) 
    })
}


//PROMISE CHAINING:
console.log("fetching data one.....")
let p1 = aysnFunc1();
p1.then((res) => {
    console.log(res);
    Console.log("fetching data2.....")
let p2 = aysnFunc2();
p2.then((res) => {
    console.log(res);
})
})

