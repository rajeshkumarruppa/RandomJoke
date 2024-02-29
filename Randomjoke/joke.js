let jokeTextEl=document.getElementById("jokeText");
let jokeBtnEl=document.getElementById("jokeBtn");
let spinnerEl=document.getElementById("spinner");

function httpResponse(){
    let url="https://apis.ccbp.in/jokes/random";
    let options={
        method:"GET"
    };
    spinnerEl.classList.remove("d-none");
    fetch(url,options)
    .then(function(response){
        return response.json();
        
    })
    .then(function(jsonData){
        console.log(jsonData.value);
        jokeTextEl.textContent=(jsonData.value);
        spinnerEl.classList.add("d-none");
    });
}
jokeBtnEl.addEventListener("click",httpResponse);