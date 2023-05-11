let boton=document.querySelector('#btnContador').addEventListener('click',mostrarCienADiez);
let text=document.querySelector('#pContador'),totalContador="";
function mostrarCienADiez(){
    for(let i=-100;i<=10;i++){
        totalContador+=i+"<br>"
    }
    text.innerHTML=`${totalContador}`
}