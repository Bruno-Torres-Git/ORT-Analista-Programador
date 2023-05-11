let boton=document.querySelector('#btnCalcular').addEventListener('click',multiploDe); 
let text=document.querySelector('#pMostrar'),totalContador="";
function multiploDe(){
    let number=Number(document.querySelector('#txtNumber').value) 
    let number2=Number(document.querySelector('#txtNumber2').value) 
    let number3=Number(document.querySelector('#txtNumber3').value) 
    if(number>number2){
        for(let j=number2;j<=number;j++){
            if(j%number3===0)
            totalContador+=j+"<br>";
        } 
    }
    else{
        for(let i=number;i<=number2;i++){
            if(i%number3===0)
            totalContador+=i+"<br>";
        } 
    }
    text.innerHTML = `Los numeros dentro de ${number} y ${number2} que son multiplos de ${number3} son :<br> ${totalContador}`;
}