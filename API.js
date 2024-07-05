const URL = ""
const factpara = document.querySelector("afact")
const getFacts = async () =>{
    console.log("getting data.....")
    let promise = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data[2].text;
}