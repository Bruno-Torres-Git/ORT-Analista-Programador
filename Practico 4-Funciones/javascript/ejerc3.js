
function general(){
    let mensaje;
    let añoBisiesto= esBisiesto(2020)
    if(añoBisiesto){
        mensaje="Es bisiesto"
    }
    else{
        mensaje="No es bisiesto"
    }
    console.log(mensaje)
}
general();

function esBisiesto(año){

    if((año%4===0 && año%100!==0) || año%400===0){
        return true
    }else{
        return false
    }
}