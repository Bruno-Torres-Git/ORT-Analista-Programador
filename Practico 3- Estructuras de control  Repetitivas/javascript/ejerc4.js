let boton=document.querySelector('#btnContador').addEventListener('click',mostrarVeinteAMenosTreinta);
let text=document.querySelector('#pContador'),totalContador="";

function mostrarVeinteAMenosTreinta(){
    for(let i=20;i>=-30;i--){
        totalContador+=i+"<br>"
    }
    text.innerHTML=totalContador
}