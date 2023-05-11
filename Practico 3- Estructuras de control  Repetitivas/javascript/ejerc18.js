document.querySelector('#btnMostrar').addEventListener('click',mostrarNumero);
let resultado="",text=document.querySelector('#pMostrar');
function mostrarNumero(){
    resultado="";
    let num=Number(document.querySelector('#txtNumber').value);
    for(let i=30;i<=200;i++){
        if(i%2===0 && i%num===0){
            resultado+=i+"<br>"
        }
    }
    text.innerHTML=resultado;
}