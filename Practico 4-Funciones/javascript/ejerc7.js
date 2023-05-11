document.querySelector("#btnMostrar").addEventListener('click',mostrarResultado)

function mostrarResultado(){
    let resultado=cambioMedida(100,'celcius')
    document.querySelector('#pMostrar').innerHTML=`El cambio de fahrenheit a la medida que indico es ${resultado}`
}



function cambioMedida(temperatura,unidad){
    let resultado=0
    if(unidad==='celcius'){
        resultado=(temperatura-32)/1.8
    }
    else if(unidad==='kelvin'){
        resultado=(temperatura+459.67)/1.8
    }
    else if(unidad==='rankine'){
        resultado=temperatura+459.67
    }
    else if(unidad==='reaumur'){
        resultado=(temperatura-32)/2.25
    }
    return resultado;
}

