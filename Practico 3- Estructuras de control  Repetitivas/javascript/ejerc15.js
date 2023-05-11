let boton=document.querySelector('#btnMostrar').addEventListener('click',divisionPor20); 
let text=document.querySelector('#pMostrar'),resultado=1
function divisionPor20(){
    let number=Number(document.querySelector('#txtNumber').value);
    let count=0
    if(number<=2000){
    document.querySelector('#txtNumber').value=""
        text.innerHTML=`Ingrese un numero mayor a 2000`
    }else{
        while(number>100){
            number/=20;
            count++;
        }
        text.innerHTML = `El resultado es ${number}`
    }
}