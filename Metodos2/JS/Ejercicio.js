function EventListener(){
    document.getElementById("arreglo").addEventListener("click", MayoraMenor());
}

function MayoraMenor(){

    var arreglo =  [33, 2, 36, 55, 4, 1]; 
    var imprimirorigi = document.getElementById("arreglorigi");
    var imprimirmayor = document.getElementById("arreglomayor")
    var imprimirmenor = document.getElementById("arreglomenor")

    imprimirorigi.innerText = "Arrglo original " + arreglo.slice();
    imprimirmenor.innerText = "Arreglo de menor a mayor " + arreglo.sort(menoramayor);
    imprimirmayor.innerText = "Arreglo de mayor menor " + arreglo.sort(mayoramenor);

}

function menoramayor(a,b){
    return a - b;
}

function mayoramenor(a,b){
    return b - a;
}