function EvenListener(){
    document.getElementById("Calcular").addEventListener("click", CalcularNumeros());
}
function CalcularNumeros(){
    var imprimirnumeros = document.getElementById("Imprimirlista");
    imprimirnumeros.innerText = "";

    var x=1;

    while(x <=16){
        
        var listado = document.createElement("li");
        listado.setAttribute("class", "list-group-item mt-2");
        listado.innerText = x;
        imprimirnumeros.appendChild(listado);
        x+=3
    }
}