function EvenListener(){
    document.getElementById("Calcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){
    var imprimirnumeros = document.getElementById("Imprimirlista");
    imprimirnumeros.innerText = "";

    var x=15;

     while(x>=5){
        
        var listado = document.createElement("li");
        listado.setAttribute("class", "list-group-item mt-2");
        listado.innerText = x;
        imprimirnumeros.appendChild(listado);

        x--
    }
}