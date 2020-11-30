function EvenListener(){
    document.getElementById("fun1").addEventListener("click", Parametro1());
    document.getElementById("fun2").addEventListener("click", Parametro2());
    document.getElementById("fun3").addEventListener("click", Parametro3());
}

function Parametro1(){
    var imprimir = document.getElementById("PrimerParametro");
    
    var numero1 = 19, numero2 = 23;

    imprimir.innerText = "El resultado de la suma es:" + " " + (numero1 + numero2);
}

function Parametro2(numero1, numero2){
    var imprimir2 = document.getElementById("SegundoParametro");

    numero1 = 29, numero2 = 17;

    imprimir2.innerText = "El resultado de la suma es:" + " " + (numero1 + numero2);
    
}

function Parametro3(numero1,numero2){ 
    var imprimir3 = document.getElementById("TercerParametro");

    imprimir3.innerText = "El resultado de la suma es:" + (Par3(11 , 6));

}

function Par3(num1,num2){
    return num1 + num2;
}

