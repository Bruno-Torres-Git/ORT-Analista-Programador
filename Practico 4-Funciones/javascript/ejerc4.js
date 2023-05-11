function obtenerDato(){
    let area=calcularAreaTriangulo(10,10)
    if(area>0){
        document.querySelector('#pMostrar').innerHTML= `El area del triangulo es ${area}`
    }
    else{
        document.querySelector('#pMostrar').innerHTML= `-1`
    }
}
obtenerDato()

function calcularAreaTriangulo(base,altura){
    if(!isNaN(base)&& !isNaN(altura) &&base>=1 && altura>=1){
        return base*altura/2
    }
    else{
        return -1
    }
}

