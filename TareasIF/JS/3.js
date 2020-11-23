function EventListener(){
    document.getElementById("calcular"), addEventListener("click", Resultado());
}

function Resultado(){

    var N1 = Number(document.getElementById("numero1").value);
    var N2 = Number(document.getElementById("numero2").value);
    var Imprimir = document.getElementById("imprimirresultado");

    if(N1 < N2){
        Imprimir.innerText = "El primer numero es menor"
    }
    if(N2 < N1){
        Imprimir.innerText = "El segundo numero es menor"
    }
    if(N1 == N2){
        Imprimir.innerText = "Los numeros son iguales"
    }
}