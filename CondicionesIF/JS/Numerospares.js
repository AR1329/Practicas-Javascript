function EvenListener(){
    document.getElementById("resultado").addEventListener("click" ,Numerospares());
}

function Numerospares(){
    var num = Number(document.getElementById("numero").value);
    var Imprimirresultado = document.getElementById("Imprimirresultado");

    if(num %2 ==0){
        Imprimirresultado.innerText = "Numero par";
    }

    else{
        Imprimirresultado.innerText = "Numero impar";
    }
}
