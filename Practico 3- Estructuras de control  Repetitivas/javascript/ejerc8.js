let boton=document.querySelector('#btnContador').addEventListener('click',mostrarNumerosEntre);
let text=document.querySelector('#pContador'),totalContador="";
function mostrarNumerosEntre(){
    let number=Number(document.querySelector('#txtNumber').value)
    let number2=Number(document.querySelector('#txtNumber2').value)
    totalContador="";
    if(number<number2){
        for(number;number<=number2;number++){
            totalContador+=number+'<br>'
        }
        text.innerHTML=totalContador
    }
    else{
        for(number;number>=number2;number--){
            totalContador+=number+'<br>'
        }
        text.innerHTML=totalContador
    }
}