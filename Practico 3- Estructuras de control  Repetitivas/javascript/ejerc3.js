let boton=document.querySelector('#btnContador').addEventListener('click',mostrarCuarentaADiez);
let text=document.querySelector('#pContador'),totalContador="";
function mostrarCuarentaADiez(){
    for(let i=40;i>=10;i--){
        totalContador+=i+"<br>"
    }
    text.innerHTML=totalContador
}