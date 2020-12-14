function EvenrListener(){
    document.getElementById("btnordenar").addEventListener("click", Ordenarnumeros());
}

function Ordenarnumeros(){

    var ArregloNumero = [1, 4, 2, 9, 11, 44 ,111, 7, 4];
    var Imprimirmenormayor = document.getElementById("imprimirmenoramayor");
    var imprimirmayormenor = document.getElementById("Imprimirmayormenor");

    //Ordenar alfabeticamente los numeros 
    ArregloNumero.sort();

    //Creo una funcion en el metodo sort para poder ordenar los numeros numericamente de menor a mayor
    imprimirmenormayor.innerText = ArregloNumero.sort(MenorAMayor());
    //Creo una funcion en el metodo sort para poder ordenar los numeros numericamente de menor a mayor
    imprimirmayormenor.innerText = ArregloNumero.sort(MayorAMenor());
}

//Funcion que me permite ordenar de menor a mayor el arreglo
function MenorAMayor(elem1, elem2){
    //termina la funcion y regresa el valor
    return elem1 - elem2;
    //1-4, 1-2, 1-9,
    //4-2, 2-9, 2-11
    //4-9, 4-11

}

function MayorAMenor(eleme1, eleme2){
    return elem2 - elem1; 
}