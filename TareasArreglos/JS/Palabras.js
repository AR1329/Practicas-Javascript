function EventListener(){
    document.getElementById("Orden").addEventListener("click", Palabras());
}

function Palabras(){

    var Palabras1 = ["Moto", "soto", "Abaco", "abeja", "Sapo", "nieve", "Zumba", "barco"];
    var Palabras2 = ["bicicleta", "silla", "cama", "computadora", "celular", "viento", "salmon", "pared"];
    var imprimir = document.getElementById("imprimir");
    var imprimir2 = document.getElementById("imprimir2");


    
    imprimir.innerText = Palabras1.sort();

    imprimir2.innerText = Palabras2.sort();


    
}
