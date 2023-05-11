function resultadoFinal(){
    let pares=numerosParesEntre(2,32)    
    document.querySelector('#pMostrar').innerHTML=`Se encontraron ${pares} pares`
}
resultadoFinal()

function numerosParesEntre(n1,n2){
    let pare=0
    for(let i=n1;i<=n2;i++){
        if(i%2===0){
            pare++
            console.log(i)
        }
    }
    return pare;
}
