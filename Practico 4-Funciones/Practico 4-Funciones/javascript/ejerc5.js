document.querySelector('#btnMostrar').addEventListener('click',mostrarResultado)

function mostrarResultado(){
    let area=calcularAreaRectangulo(10,6);
    document.querySelector('#pMostrar').innerHTML=`El area del rectangulo es ${area}`
}


function calcularAreaRectangulo(ancho,alto){
    let area=0
    if(!isNaN(ancho) && !isNaN(alto) && ancho>=1 && alto>=1){
        area=ancho*alto
    }
    else{
        area=-1
    }
    return area;
}