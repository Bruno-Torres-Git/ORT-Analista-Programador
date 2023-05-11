//Letra armar presupuesto para un electricista 
/*
PRECONDICIONES:[
La aplicacion debe pedir el ingreso de cantidad de dias y la cantidad de horas por dias (2 input)
Debe pedir si va a utilizar un asistente o no(select) 
Y el costo de materiales(1 input)
Imprimir en pantalla el resultado(Parrafo)
]
Y trabaja las mismas horas y dias que le indiquemos al electricista
El electricista por si solo cobra 200 pesos por hora(costoElectricista=200)
Si el electricista va usar un asistente el asistente cobra 150 pesos por hora(costoAsistente=150)
Al costo de materiales el electricista les cobra un 10% por concepto de compra y traslado de los mismo(costoMateriales/100 *10)
Crear una funcion que valide que los valores ingresados son numeros positivos 
Crear una funcion que calcule el salario para el electricista y el asistente en base a las horas que va a trabajar y dias(return costoTotal)
Crear una funcion que calcule el costo final de los materiales(return costo final) 
*/
let boton=document.querySelector('#btnTotal').addEventListener('click',resultadoTotal)

function resultadoTotal(){
    let horas=Number(document.querySelector('#txtHoras').value);
    let dias=Number(document.querySelector('#txtDias').value);
    let costoMat=Number(document.querySelector('#txtMateriales').value);
    let usuario=document.querySelector("#txtUsuario").value;
    let text=document.querySelector('#pMostrar');
    document.querySelector('#pMostrar').innerHTML=""
    let valiCostoMat=verificarPositivo(costoMat)
    let valiHoras=verificarPositivo(horas)
    let valiDias=verificarPositivo(dias)
    let salarioTotal=tipoUsuario(usuario,horas,dias)
    let costoTotalMat=costos(costoMat)
    let costoFinal=costoTotalMat+salarioTotal
    if(valiCostoMat===false){
        text.innerHTML="Porfavor ingrese un valor en el costo de los materiales"
    }
    else if(valiHoras===false){
        text.innerHTML="Porfavor ingrese un valor en el ingreso de horas"
    }
    else if(valiDias===false){
        text.innerHTML="Porfavor ingrese un valor en el input de dias"
    }
    else{
        text.innerHTML=`Usted como ${usuario} tiene un salario de ${salarioTotal} y debe cobrar un total de ${costoFinal}`    
    }
}
function verificarPositivo(valor1){
    if(isNaN (valor1) || valor1<=0 ){
        return false
    }
    else{
        return true;
    }
}
function tipoUsuario(usuario,horas,dias){
    let salarioPorHora; 
    let salarioPorDia;
    let salarioTotal;
    if(usuario==="electricista"){
        salarioPorHora=(horas * 200)/horas //Por horas
        salarioPorDia=(salarioPorHora * horas) //Por dia
        salarioTotal=salarioPorDia * dias //Total
    }
    else if(usuario==="asistente"){
        salarioPorHora=(horas * 150) /horas //Por horas
        salarioPorDia=(salarioPorHora*horas) //Por dia
        salarioTotal=salarioPorDia*dias //Total   
    }
    console.log(salarioPorHora)
    return salarioTotal
}
function costos(costoMateriales){
    let totalFinal=((costoMateriales/100)*10)+costoMateriales
    return totalFinal;
}

