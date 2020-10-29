// 10,30,50

// if(10 > 30){
// 30 es mayor
// }else if (10 > 50){
//      50 es mayor
// }else if(30 > 50){
// }
// else{
//     30 es el numero
// }

function EventListener(){
    document.getElementById("Calcular").addEventListener("click", Calcular());
}
//Se llama la función que declare en el boton
function Calcular(){

    //Declarar una variable para leer el numero que voy a ingresar en el input
    var Numero1 = Number(document.getElementById("Numero1").value);
    var Numero2 = Number(document.getElementById("Numero2").value);
    var Numero3 = Number(document.getElementById("Numero3").value);
    //Declara un nombre para leer la etiqueta que imprime
    var ImprimirComparacionNum = document.getElementById("Imprimir")

    //Comparación de tres numeros 
    // 10 35 65

    // 10 > 35 && 10 > 65

    // 35 > 10 && 35 > 65

    // 65 > 10 && 65 > 35

    if(Numero1 > Numero2 && Numero1 > Numero3){
        ImprimirComparacionNum.innerText = "El numero mayor es:" + Numero1;
    }
    if(Numero2 > Numero1 && Numero2 > Numero3){
        ImprimirComparacionNum.innerText = "El numero mayor es:" + Numero2;
    }
    if(Numero3 > Numero1 && Numero3 > Numero2){
        ImprimirComparacionNum.innerText = "El numero mayor es:" + Numero3;
    }
}