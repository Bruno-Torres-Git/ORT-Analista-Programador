let boton=document.querySelector('#btnContador').addEventListener('click',calcularProducto); 
let text=document.querySelector('#pContador'),totalContador=0;
function calcularProducto(){
    let number=Number(document.querySelector('#txtNumber').value) 
    let number2=Number(document.querySelector('#txtNumber2').value) 
    for(let i=number;i<=number2;i++){
        totalContador+=number*i;
    } 
    text.innerHTML = "El producto de " + number + " y " + number2 + " es " + totalContador;
}