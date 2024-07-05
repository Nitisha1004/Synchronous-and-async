function api(){
    return new Promise((resolve, rejected) =>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
     
        }, 2000)
      
    })
}

async function getWeatherData(){
    await api();//1st call
    await api();//2nd call

}