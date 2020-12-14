function EventListenener(){
    document.getElementById("boolean").addEventListener("click", Booleanos())
}

function Booleanos(){

    var valor1 = true;
    var valor2 = false;
    var imprimirsuma1 = document.getElementById("suma1");
    var imprimirsuma2 = document.getElementById("suma2");
    var imprimirconclusion = document.getElementById("conclusion");

    imprimirsuma1.innerText = "La suma del primer valor booleano es: " + (valor1 + 9) + " y el sugundo valor es: " + (valor2 + 7);

    imprimirsuma2.innerText = "La coversion a string del primer valor es: " + valor1.toString() + " y del segundo es: " + valor2.toString();

    imprimirconclusion.innerText = "Mi conclusion es que la varible true por si misma tiene un valor interno por lo que en una suma con un valor numerico utiliza su valor interno (1) y lo suma dando a 9 + 1 por lo que cuando no se utiliza en una operacion con valor numerico su valor va seguir siendo true o false respectivamente"
} 