let boton=document.querySelector('#btnContador').addEventListener('click',mostrarCuarentaADiez);
let text=document.querySelector('#pContador'),totalContador="";
function mostrarCuarentaADiez(){
    for(let i=-33;i<=230;i++){
        if(i%4===0){
            totalContador+=i+"<br>"
        }
    }
    text.innerHTML=totalContador
}