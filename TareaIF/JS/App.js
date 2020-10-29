function EventListener(){
    document.getElementById("Calcularedad").addEventListener("click", Calcularedad());
}

function Calcularedad(){

    var Enrique = Number(document.getElementById("edadEnrique").value);

    var Oziel = Number(document.getElementById("edadOziel").value);

    var imprimirmensaje = document.getElementById("imprimiredad");

    var dif1 = Enrique - Oziel;

    var dif2 = Enrique - Oziel;

    if(Enrique > Oziel){
        imprimirmensaje.innerText = "Enrique es el hermano mayor con " + Enrique + " años y tienen una diferencia de " + dif1 + " años";
    }
    else if(Enrique < Oziel){
        imprimirmensaje.innerText = "Oziel es el hermano mayor con " + Oziel + " años y tienen una diferncia de " + dif2 + " años";
    }

}