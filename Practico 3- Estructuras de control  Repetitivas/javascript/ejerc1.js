let boton=document.querySelector('#btnContador').addEventListener('click',mostrarUnoAMil);
let text=document.querySelector('#pContador'),totalContador="";
function mostrarUnoAMil(){
    for(let i=0;i<=1000;i++){
        totalContador+=i+"<br>"
    }
    text.innerHTML=`${totalContador}`
}