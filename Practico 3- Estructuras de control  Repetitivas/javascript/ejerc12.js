let boton=document.querySelector('#btnFactorial').addEventListener('click',calcularFactorial); 
let text=document.querySelector('#pMostrar'),totalContador=1;
function calcularFactorial(){
    let number=Number(document.querySelector('#txtNumber').value);
    totalContador=1;
    for(let i=1;i<=number;i++){
        totalContador=totalContador*i
    }
    text.innerHTML = `El factorial de ${number} es :<br> ${totalContador}`;
}