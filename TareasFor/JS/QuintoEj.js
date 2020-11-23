function EvenListener(){
    document.getElementById("Calcular").addEventListener("click", imprimirnumeros());
    document.getElementById("imprimir").addEventListener("click", imprimirif());
}

function imprimirnumeros(){
    var imprimirnumeros = document.getElementById("Imprimirlista");
    imprimirnumeros.innerText = "";

    for(var x=5; x<=50; x+=5){

        5,10,15,20,25,30,35,40,45,50
        
        var listado = document.createElement("li");
        listado.setAttribute("class", "list-group-item mt-2");
        listado.innerText = x;
        imprimirnumeros.appendChild(listado);
    }
}

function imprimirif(){
    var  imprimirif = document.getElementById("Implis");
    imprimirif.innerText = "";

    for(var x=5; x<=50; x+=5){
       
        if(x % 5 == 0){
            5,10,15,20,25,30,35,40,45,50
        }
        
        var imprimir = document.createElement("li");
        imprimir.setAttribute("class", "list-group-item mt-2");
        imprimir.innerText = x;
        imprimirif.appendChild(imprimir);
    }
}
