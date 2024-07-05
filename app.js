function hello() {
    console.log("hello");
}

setTimeout(hello, 2000)

console.log("one");
console.log("two")
setTimeout(()=>{
    console.log("hello")
}, 4000)
console.log("three")

//nesting
let age = 19
if (age>=18){
    if(age>=60){console.log("senior")

    }
    else{
        console.log("middle")
    }}
    else{
        console.log("child")
    }
    
    

