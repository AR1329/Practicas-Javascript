function EvenListener(){
    document.getElementById("fun1").addEventListener("click", D1());
    document.getElementById("fun2").addEventListener("click", D2());
    document.getElementById("fun3").addEventListener("click", D3());
}

function D1(){
    var Resultado = document.getElementById("primera");
    
    var numero1 = 52, numero2 = 25;

    Resultado.innerText = "El resultado de la divison es:" + (numero1 / numero2);
}

function D2(numero1, numero2){
    var Resultado2 = document.getElementById("segunda");

    numero1 = 86, numero2 = 17;

    Resultado2.innerText = "El resultado de la division es:" + (numero1 / numero2);
    
}

function D3(numero1,numero2){ 
    
    var Resultado3 = document.getElementById("tercera");

    Resultado3.innerText = "El resultado de la division es:" + (Division3(18 , 7));

}

function Division3(num1, num2){

    return num1 / num2
}

    