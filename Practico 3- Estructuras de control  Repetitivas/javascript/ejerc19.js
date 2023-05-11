let boton = document.querySelector("#btnMostrar").addEventListener("click", generarCalendario);
function generarCalendario(){
  let cantDias = 0;
  let comienza = 1;
  let dias=document.querySelector('#slcDias').value;
  let meses=document.querySelector('#slcMes').value;
  let dia = 1; 
  let columna = 1;
  let tableBody= document.querySelector("#tableBody");
  let calendario="";
  switch (meses) {
    case "ene":
    case "mar":
    case "may":
    case "jul":
    case "ago":
    case "oct":
    case "dic":
      cantDias = 31;
      break;
    case "abr":
    case "jun":
    case "sep":
    case "nov":
      cantDias = 30;
      break;
    case "feb":
      cantDias = 28;
      break;
  }
  switch (dias) {
    case "lu":
      comienza=1
      break;
    case "ma":
        comienza=2
        break;
    case "mi":
      comienza=3
      break;
    case "ju":
      comienza=4
      break;
    case "vi":
      comienza=5
      break;
    case "sa":
      comienza=6
      break;
    case "do":
      comienza=7
      break;
  }
  for(let i= 1; i< cantDias + comienza; i++){
    let dato = " "
    let celda="";
    if(i>=comienza){
      dato=dia;
      dia++;
    }
    if(columna===1){ //Comienzo nueva fila
      celda="<tr>";
    }
    celda += `<td>${dato}</td>`
    if(columna === 7 ){ //Termino fila
      celda+="</tr>";
      columna = 0;
    }
    columna++;
    calendario += celda   
  }
  tableBody.innerHTML = calendario
}