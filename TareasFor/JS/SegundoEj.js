function EvenListener(){
    document.getElementById("Calcular").addEventListener("click", CalcularNumeros());
}
function CalcularNumeros(){
    var imprimirnumeros = document.getElementById("Imprimirlista");
    imprimirnumeros.innerText = "";

    for(var x=1; x<=16; x+=3){
        
        var listado = document.createElement("li");
        listado.setAttribute("class", "list-group-item mt-2");
        listado.innerText = x;
        imprimirnumeros.appendChild(listado);
    }
}