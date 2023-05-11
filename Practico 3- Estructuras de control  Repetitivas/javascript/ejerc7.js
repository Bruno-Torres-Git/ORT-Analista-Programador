let boton=document.querySelector('#btnContador').addEventListener('click',mostrarGuiones);
let text=document.querySelector('#pContador'),totalContador="";
function mostrarGuiones(){
    let number=Number(document.querySelector('#txtNumber').value)
    if(number>=2 && number<=50){
        for(let i=1;i<=number;i++){
            totalContador+=`-` //esto es un comentario en el for
        }
        text.innerHTML=totalContador
    }
    else{
        text.innerHTML="Porfavor ingrese un numero dentro del rango"

    }
}