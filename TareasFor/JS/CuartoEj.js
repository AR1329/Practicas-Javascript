function EvenListener(){
    document.getElementById("Calcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){
    var imprimirnumeros = document.getElementById("Imprimirlista");
    imprimirnumeros.innerText = "";

    for(var x=15; x>=5; x--){
        
        var listado = document.createElement("li");
        listado.setAttribute("class", "list-group-item mt-2");
        listado.innerText = x;
        imprimirnumeros.appendChild(listado);
    }
}