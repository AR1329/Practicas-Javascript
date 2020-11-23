function EventListener(){
    document.getElementById("calcular").addEventListener("click" , Numeromultiplo());
}

function Numeromultiplo(){
    var elPrimero = Number(document.getElementById("Primero").value);
    var elSegundo = Number(document.getElementById("Segundo").value);
    var imprimirmultiplo = document.getElementById("alerta");


    if(elPrimero % elSegundo == 0){
        imprimirmultiplo.innerText = "El primer número es multiplo del segundo número"
    }

    else{
        imprimirmultiplo.innerText = "El primer número no es multiplo del segundo"
    }
}