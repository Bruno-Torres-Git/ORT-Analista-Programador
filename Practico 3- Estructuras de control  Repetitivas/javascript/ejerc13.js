let boton=document.querySelector('#btnMostrar').addEventListener('click',mostrarFigura); 
let text=document.querySelector('#pDibujar'),totalAncho="",l;
function mostrarFigura(){
    totalAncho="";
    let alto=Number(document.querySelector('#txtAlto').value) 
    let ancho=Number(document.querySelector('#txtAncho').value) 
    //CON FOR
    for(let l=alto;l>=1;l--){
        for(let i=1;i<=ancho;i++){
            totalAncho+="0"
        }
        totalAncho+="<br>"
    }
    text.innerHTML=totalAncho;
   //CON WHILE
    /*let i=1;
    l=alto
    while(l>=1){
        while(i<=ancho){
            i++
            totalAncho+="0"
        }
        l--
        totalAncho=totalAncho+"<br>"
    }
    text.innerHTML=totalAncho;
    */
}
