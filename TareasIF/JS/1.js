function EventListener(){
    document.getElementById("Calcular"), addEventListener("click", Resultado());
}

function Resultado(){

    var cliente = Number(document.getElementById("numero").value);
    var imprimir = document.getElementById("imprimirresultado");

    if(cliente == 1000){
        imprimir.innerText = "¡Felicidades! ganaste un premio";
    }
    else{
        imprimir.innerText = "No ganaste suerte para la proxima";
    }

}