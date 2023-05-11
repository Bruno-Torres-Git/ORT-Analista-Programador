let boton=document.querySelector('#btnMostrar').addEventListener('click',divisonCompleta); 
let resto=0,cociente=0,prueba=0;
function divisonCompleta(){//linea3 esto es la firma de la funcion
    let dividendo=Number(document.querySelector('#txtNumber').value);//linea 4 a 18 se le llama cuerpo 
    let divisor=Number(document.querySelector('#txtNumber2').value);
    let text=document.querySelector('#pMostrar')
    let msgFinal=""
    msgFinal=""
    resto=dividendo
    cociente=0
    prueba=dividendo%divisor
    while(resto>=divisor){
        resto=resto-divisor;
        cociente++;
        msgFinal=`El resto es ${resto} y el cociente es ${cociente}`
    }
    text.innerHTML=msgFinal
    console.log(prueba)
    //Se le llama return a lo que va aca que es para llevar a afuera una cajita 
}
/*
    for(let i=divisor;i<dividendo;dividendo/=i){
        resto+=i;
        cociente=dividendo%divisor;
    }
*/