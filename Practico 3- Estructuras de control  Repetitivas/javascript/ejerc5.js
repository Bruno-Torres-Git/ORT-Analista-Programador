let boton=document.querySelector('#btnContador').addEventListener('click',mostrarCuarentaADiez);
let text=document.querySelector('#pContador'),totalContador="";
function mostrarCuarentaADiez(){
    for(let i=1;i<=450;i++){
        if(i%5===0){
            totalContador+=i+"<br>"
        }
    }
    text.innerHTML=totalContador
}