function EvenListener(){
    document.getElementById("fun1").addEventListener("click", Resta1());
    document.getElementById("fun2").addEventListener("click", Resta2());
    document.getElementById("fun3").addEventListener("click", Resta3());
}

function Resta1(){
    var Resultado = document.getElementById("uno");
    
    var numero1 = 25, numero2 = 15;

    Resultado.innerText = "El resultado de la resta es:" + (numero1 - numero2);
}

function Resta2(numero1, numero2){
    var Resultado2 = document.getElementById("dos");

    numero1 = 86, numero2 = 17;

    Resultado2.innerText = "El resultado de la resta es:" + (numero1 - numero2);
    
}

function Resta3(numero1,numero2){ 
    var Resultado3 = document.getElementById("tres");

    Resultado3.innerText = "El resultado de la resta es:" + (R3(18 , 7));

}

function R3(numero1,numero2){
    return numero1 - numero2;
}
    
   