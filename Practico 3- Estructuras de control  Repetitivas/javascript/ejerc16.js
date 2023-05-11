let boton=document.querySelector('#btnMostrar').addEventListener('click',multiploDe4y6); 
let text=document.querySelector('#pMostrar')
function multiploDe4y6(){
    let number=Number(document.querySelector('#txtNumber').value);
    let number2=Number(document.querySelector('#txtNumber2').value);
    let multiploEncontrado=false;
    let multiplo=0;
    let menor=number;
    let mayor=number2;
    document.querySelector('#pMostrar').innerHTML="";
    if(number===0 || number2===0){
        text.innerHTML=`Porfavor ingrese un numero`
    }
    else if(number<0 || number2<0){
        text.innerHTML=`Porfavor ingrese un numero positivo`
    }
    if(number>number2){
        menor=number2
        mayor=number
    }
    else if(number!=number2 && mayor-menor>=12){
        for(let i=menor;i<=mayor && !multiploEncontrado;i++){
            let multiplo4=i%4
            let multiplo6=i%6
            if(multiplo4===multiplo && multiplo6===multiplo){
                multiplo+=i;
                multiploEncontrado=true;
                text.innerHTML=`El primer multiplo que encontramos de 4 y 6 en el rango de ${menor} y ${mayor} es ${multiplo}`
            }
        }
    }
    else{
        text.innerHTML=`El primer multiplo que encontramos de 4 y 6 en el rango de ${menor} y ${mayor} es ${multiplo}`
    }
}