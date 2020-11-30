function EvenListener(){
    document.getElementById("fun1").addEventListener("click", Mul1());
    document.getElementById("fun2").addEventListener("click", Mul2());
    document.getElementById("fun3").addEventListener("click", Mul3());
}

function Mul1(){
    var Resultado = document.getElementById("uno");
    
    var numero1 = 52, numero2 = 25;

    Resultado.innerText = "El resultado de la multiplicacion es:" + (numero1 * numero2);
}

function Mul2(numero1, numero2){
    var Resultado2 = document.getElementById("dos");

    numero1 = 86, numero2 = 17;

    Resultado2.innerText = "El resultado de la multiplicacion es:" + (numero1 * numero2);
    
}

function Mul3(numero1,numero2){ 
    
    var Resultado3 = document.getElementById("tres");

    Resultado3.innerText = "El resultado de la multiplicacion es:" + (M3(18 , 7));

}

function M3(num1,num2){
    return num1 * num2
}
    