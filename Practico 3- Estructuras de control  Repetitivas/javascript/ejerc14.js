let boton=document.querySelector('#btnMostrar').addEventListener('click',mostrarDigitos); 
let text=document.querySelector('#pMostrar'),resultado=1
function mostrarDigitos(){
    let number=Number(document.querySelector('#txtDigitos').value);
    let count=0
    while(number>1){
        number/=10;
        count++;
    }
    text.innerHTML = `El numero tiene ${count} cifras`
}