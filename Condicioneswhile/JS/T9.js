function EvenListener(){
    document.getElementById("Calcular").addEventListener("click", imprimirnumeros());
}

function imprimirnumeros(){
    var imprimirnumeros = document.getElementById("Imprimirlista");
    imprimirnumeros.innerText = "";

    var x=5;

    while( x<=50){

        5,10,15,20,25,30,35,40,45,50
        
        var listado = document.createElement("li");
        listado.setAttribute("class", "list-group-item mt-2");
        listado.innerText = x;
        imprimirnumeros.appendChild(listado);

        x+=5
    }
}