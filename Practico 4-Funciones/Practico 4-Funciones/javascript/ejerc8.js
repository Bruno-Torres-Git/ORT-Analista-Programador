document.querySelector('#btnMostrar').addEventListener('click',mostrarResultado)


function mostrarResultado(){
let resultado=calcularPotencia(4,6)
document.querySelector('#pMostrar').innerHTML=`El resultado es ${resultado}`
}

function calcularPotencia(base,exponente){
let resultado=1;
while(exponente>=1){
    resultado*=base
    exponente--
}
return resultado;
}