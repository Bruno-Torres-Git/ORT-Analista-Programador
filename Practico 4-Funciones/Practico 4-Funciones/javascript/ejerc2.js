
function mostrarResultado(){
    let mensaje=esMayor(21,20)
    document.querySelector('#pMostrar').innerHTML=mensaje
}
mostrarResultado()
function esMayor(edad,tope){
    let mensaje="";
    if(edad>tope){
        mensaje="es mayor"
    }
    else{
        mensaje="no es mayor"
    }
    console.log(mensaje)
return mensaje
}
