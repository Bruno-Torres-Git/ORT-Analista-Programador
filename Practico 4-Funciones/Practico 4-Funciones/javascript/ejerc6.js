document.querySelector('#btnMostrar').addEventListener('click',mostrarResultado)

function mostrarResultado(){
    let fahrenheit=celciusAFahrenheit(150);
    document.querySelector('#pMostrar').innerHTML=`El cambio a grados Fahrenheit da ${fahrenheit} °F`       
}


function celciusAFahrenheit(temperatura){
    let fahrenheit=0
    fahrenheit= 1.8 * temperatura + 32
    return fahrenheit;
}