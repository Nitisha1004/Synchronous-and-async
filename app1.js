function getData(dataId){
    return new Promise((resolve, rejected0)=>{//2s
   setTimeout(()=>{
    console.log("data", dataId);
   resolve("success");
   },2000);
})
};



//async-await
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    
}

//callback hell
/*
getData(1, ()=>{
    console.log("getting data 2")
    getData(2, ()=>{
        console.log("getting data 3")
        getData(3, ()=>{
            getData(4);
        })
    })
});
getData(2);
getData(3);
//data1
//data2
//data3
*/