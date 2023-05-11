let boton=document.querySelector('#btnContador').addEventListener('click',mostrarProducto); 
let text=document.querySelector('#pContador'),totalContador=0;
function mostrarProducto(){
    let number=Number(document.querySelector('#txtNumber').value) 
    let number2=Number(document.querySelector('#txtNumber2').value) 
    for(let i=1;i<=number2;i++){
        totalContador+=number;
    } 
    text.innerHTML = "El producto de " + number + " y " + number2 + " es " + totalContador;
}